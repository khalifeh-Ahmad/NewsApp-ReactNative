export function cleanHtml(html: string): string {
  if (!html) return '';
  // Remove all HTML tags using regex
  return html.replace(/<[^>]*>/g, '');
}
