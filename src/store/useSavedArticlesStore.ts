import { create } from 'zustand';
import { ArticleType } from '../utils/types/articleType';
import { articleStorage } from '../utils/storage/articleStorage';

type SavedArticlesState = {
  savedArticles: ArticleType[];
  isLoading: boolean;
  isInitialized: boolean;

  // Actions
  initializeStore: () => Promise<void>;
  saveArticle: (article: ArticleType) => Promise<void>;
  removeArticle: (articleUrl: string) => Promise<void>;
  toggleSaveArticle: (article: ArticleType) => Promise<void>;
  isArticleSaved: (articleUrl: string) => boolean;
  clearAllSavedArticles: () => Promise<void>;
};

export const useSavedArticlesStore = create<SavedArticlesState>((set, get) => ({
  savedArticles: [],
  isLoading: false,
  isInitialized: false,

  /**
   * Initialize store by loading saved articles from AsyncStorage
   */
  initializeStore: async () => {
    if (get().isInitialized) return;
    
    set({ isLoading: true });
    try {
      const articles = await articleStorage.getSavedArticles();
      set({ savedArticles: articles, isInitialized: true });
    } catch (error) {
      console.error('Error initializing saved articles store:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  /**
   * Save an article to storage
   */
  saveArticle: async (article: ArticleType) => {
    if (!article?.url) return;

    // Optimistically update UI
    const currentArticles = get().savedArticles;
    const exists = currentArticles.some(a => a.url === article.url);
    
    if (exists) return;

    set({ savedArticles: [...currentArticles, article] });

    // Persist to storage
    try {
      await articleStorage.saveArticle(article);
    } catch (error) {
      // Rollback on error
      set({ savedArticles: currentArticles });
      console.error('Error saving article:', error);
    }
  },

  /**
   * Remove an article from storage
   */
  removeArticle: async (articleUrl: string) => {
    if (!articleUrl) return;

    // Optimistically update UI
    const currentArticles = get().savedArticles;
    const updatedArticles = currentArticles.filter(a => a.url !== articleUrl);
    
    set({ savedArticles: updatedArticles });

    // Persist to storage
    try {
      await articleStorage.removeArticle(articleUrl);
    } catch (error) {
      // Rollback on error
      set({ savedArticles: currentArticles });
      console.error('Error removing article:', error);
    }
  },

  /**
   * Toggle save/unsave an article
   */
  toggleSaveArticle: async (article: ArticleType) => {
    if (!article?.url) return;

    const isSaved = get().isArticleSaved(article.url);
    
    if (isSaved) {
      await get().removeArticle(article.url);
    } else {
      await get().saveArticle(article);
    }
  },

  /**
   * Check if an article is saved (sync check from state)
   */
  isArticleSaved: (articleUrl: string) => {
    if (!articleUrl) return false;
    return get().savedArticles.some(a => a.url === articleUrl);
  },

  /**
   * Clear all saved articles
   */
  clearAllSavedArticles: async () => {
    const currentArticles = get().savedArticles;
    
    set({ savedArticles: [] });

    try {
      await articleStorage.clearAllSavedArticles();
    } catch (error) {
      // Rollback on error
      set({ savedArticles: currentArticles });
      console.error('Error clearing saved articles:', error);
    }
  },
}));
