import { baseUrl, throwResponseNotOKErr } from './base.js';

export async function fetchArticles(qpPairs) {
  const url = new URL(`${baseUrl}/articles`);

  qpPairs.forEach(([param, val]) => {
    url.searchParams.set(param, val);
  });

  const res = await fetch(url.toString());
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

export async function updateArticleVotes(id, inc_votes) {
  const res = await fetch(`${baseUrl}/articles/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inc_votes })
  });

  if (!res.ok) await throwResponseNotOKErr(res);

  const { article: { votes } } = await res.json();
  return votes;
}
