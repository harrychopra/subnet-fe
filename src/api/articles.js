const baseUrl = 'https://subnet-be.onrender.com/api/articles';

import { throwResponseNotOKErr } from './error.js';

export async function fetchArticles() {
  const res = await fetch(baseUrl);
  if (!res.ok) await throwResponseNotOKErr(res);

  const { articles } = await res.json();
  return articles;
}
