export const getReadTime = (text: string): number => {
  if (!text) return 1;
  
  const cleanText = text
    .replace(/\[\+\d+ chars\]/g, '')
    .replace(/<[^>]*>/g, '')
    .trim();
    
  if (!cleanText) return 1;
  
  const words = cleanText.split(/\s+/).filter(w => w.length > 0).length;
  return Math.max(1, Math.ceil(words / 200));
};