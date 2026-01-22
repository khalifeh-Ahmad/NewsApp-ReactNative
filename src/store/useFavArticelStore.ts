import { create } from 'zustand';
import { ArticleType } from '../utils/types/articleType';

type FavStoreState = {
  favList: ArticleType[];
  addToFavList: (article: ArticleType) => void;
};
export const useFavArticlesStore = create<FavStoreState>(set => ({
  favList: [],
  addToFavList: article =>
    set(state => {
      // Skip if article is missing or has no URL
      if (!article?.url) return state;

      // Checking if already in favList
      const exists = state.favList.some(fav => fav.url === article.url);

      if (exists) {
        return state; // don't add duplicate
      }

      return { favList: [...state.favList, article] };
    }),
}));
