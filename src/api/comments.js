import { baseUrl, throwResponseNotOKErr } from './base.js';

export async function fetchCommentsByArticleId(id) {
  const res = await fetch(`${baseUrl}/articles/${id}/comments`);
  if (!res.ok) await throwResponseNotOKErr(res);

  const { comments } = await res.json();
  return comments;
}

export async function postComment({ articleId, author, commentBody }) {
  const res = await fetch(`${baseUrl}/articles/${articleId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: author,
      body: commentBody
    })
  });
}

export async function deleteComment(commentId) {
  const res = await fetch(`${baseUrl}/comments/${commentId}`, {
    method: 'DELETE'
  });

  if (!res.ok) await throwResponseNotOKErr(res);
  return;
}

export async function updateCommentVotes(id, inc_votes) {
  const res = await fetch(`${baseUrl}/comments/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inc_votes })
  });

  if (!res.ok) await throwResponseNotOKErr(res);

  const { comment: { votes } } = await res.json();
  return votes;
}
