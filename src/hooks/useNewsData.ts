import { useState, useEffect } from 'react';
import { ArticleType } from '../utils/types/articleType';
import { getData } from '../utils/helpers/apiService';

export const useNewsData = (endpoint: string, params: Record<string, any> = {}) => {
  const [data, setData] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getData(endpoint, params);
      const articles = response.data.articles?.filter(
        (article: ArticleType) => article.urlToImage !== null
      ) || [];
      setData(articles);
    } catch (err) {
      setError('Failed to load news');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};