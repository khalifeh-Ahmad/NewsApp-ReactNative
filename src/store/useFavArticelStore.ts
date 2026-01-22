import { create } from 'zustand';
import { ArticleType } from '../utils/types/articleType';

type FavStoreState = {
  favList: ArticleType[];
  addToFavList: (article: ArticleType) => void;
};
export const useFavArticlesStore = create<FavStoreState>(set => ({
  favList: [],
  addToFavList: article =>
    set(state => ({ favList: [...state.favList, article] })),
}));
