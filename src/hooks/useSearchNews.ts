import { useState, useEffect, useCallback } from 'react';
import { ArticleType } from '../utils/types/articleType';
import { getData } from '../utils/helpers/apiService';

export const useSearchNews = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debounced search function
  const searchNews = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await getData('/everything', {
        q: searchQuery,
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: 20,
      });

      const articles =
        response.data.articles?.filter(
          (article: ArticleType) => article.urlToImage != null,
        ) || [];

      setResults(articles);
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to fetch results');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      searchNews(query);
    }, 500); // Wait 500ms after user stops typing

    return () => clearTimeout(handler);
  }, [query, searchNews]);

  return {
    query,
    setQuery,
    results,
    loading,
    error,
  };
};
