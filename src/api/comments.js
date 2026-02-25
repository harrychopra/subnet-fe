const baseUrl = 'https://subnet-be.onrender.com/api';

import { throwResponseNotOKErr } from './base.js';

export async function fetchCommentsByArticleId(id) {
  const res = await fetch(`${baseUrl}/articles/${id}/comments`);
  if (!res.ok) await throwResponseNotOKErr(res);

  const { comments } = await res.json();
  return comments;
}
