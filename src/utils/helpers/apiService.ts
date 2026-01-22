import axios from 'axios';

const baseUrl = 'https://newsapi.org/v2';
const apiKey = '2848579679024ca9bee1a745790ee50c';

export function getData(url: string) {
  const fullUrl = `${baseUrl}${url}&apiKey=${apiKey}`;
  return axios.get(fullUrl);
}
