export const getReadTime = (text: string): number => {
  if (!text) return 1;

  // Remove NewsAPI's "[+XXXX chars]" pattern
  const cleanText = text
    .replace(/\[\+\d+ chars\]/g, '') // Remove "[+1234 chars]"
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .trim();

  if (!cleanText) return 1;

  const words = cleanText.split(/\s+/).length;
  const wordsPerMinute = 200;

  return Math.max(1, Math.ceil(words / wordsPerMinute));
};
