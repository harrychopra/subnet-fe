import { baseUrl, throwResponseNotOKErr } from './base.js';

export async function fetchArticles() {
  const res = await fetch(`${baseUrl}/articles`);
  if (!res.ok) await throwResponseNotOKErr(res);

  const { articles } = await res.json();
  return articles;
}

export async function fetchArticleById(id) {
  const res = await fetch(`${baseUrl}/articles/${id}`);
  if (!res.ok) await throwResponseNotOKErr(res);

  const { article } = await res.json();
  return article;
}
