import AsyncStorage from '@react-native-async-storage/async-storage';
import { ArticleType } from '../types/articleType';

const SAVED_ARTICLES_KEY = '@saved_articles';

/**
 * Storage utility for offline article saving
 */
export const articleStorage = {
  /**
   * Get all saved articles from storage
   */
  async getSavedArticles(): Promise<ArticleType[]> {
    try {
      const jsonValue = await AsyncStorage.getItem(SAVED_ARTICLES_KEY);
      return jsonValue ? JSON.parse(jsonValue) : [];
    } catch (error) {
      console.error('Error reading saved articles:', error);
      return [];
    }
  },

  /**
   * Save articles to storage
   */
  async setSavedArticles(articles: ArticleType[]): Promise<void> {
    try {
      const jsonValue = JSON.stringify(articles);
      await AsyncStorage.setItem(SAVED_ARTICLES_KEY, jsonValue);
    } catch (error) {
      console.error('Error saving articles:', error);
    }
  },

  /**
   * Add a single article to saved articles
   */
  async saveArticle(article: ArticleType): Promise<ArticleType[]> {
    try {
      const currentArticles = await this.getSavedArticles();
      
      // Check if article already exists
      const exists = currentArticles.some(a => a.url === article.url);
      if (exists) {
        return currentArticles;
      }
      
      const updatedArticles = [...currentArticles, article];
      await this.setSavedArticles(updatedArticles);
      return updatedArticles;
    } catch (error) {
      console.error('Error saving article:', error);
      return [];
    }
  },

  /**
   * Remove a single article from saved articles
   */
  async removeArticle(articleUrl: string): Promise<ArticleType[]> {
    try {
      const currentArticles = await this.getSavedArticles();
      const updatedArticles = currentArticles.filter(a => a.url !== articleUrl);
      await this.setSavedArticles(updatedArticles);
      return updatedArticles;
    } catch (error) {
      console.error('Error removing article:', error);
      return [];
    }
  },

  /**
   * Check if an article is saved
   */
  async isArticleSaved(articleUrl: string): Promise<boolean> {
    try {
      const currentArticles = await this.getSavedArticles();
      return currentArticles.some(a => a.url === articleUrl);
    } catch (error) {
      console.error('Error checking article:', error);
      return false;
    }
  },

  /**
   * Clear all saved articles
   */
  async clearAllSavedArticles(): Promise<void> {
    try {
      await AsyncStorage.removeItem(SAVED_ARTICLES_KEY);
    } catch (error) {
      console.error('Error clearing saved articles:', error);
    }
  },
};
