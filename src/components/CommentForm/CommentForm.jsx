import { useState } from 'react';
import { postComment } from '../../api/comments.js';
import './CommentForm.css';

export default function CommentForm({ articleId, author, hideCommentForm }) {
  const [commentBody, setCommentBody] = useState('');
  const handleFormInput = e => setCommentBody(e.target.value);

  const handleFormSubmit = () => {
    (async () => {
      try {
        await postComment({ articleId, author, commentBody });
        hideCommentForm();
      } catch (error) {
        console.error(error);
      }
    })();
  };
  return (
    <div className="comment-form">
      <textarea
        value={commentBody}
        onChange={handleFormInput}
        onFocus={handleFormInput}
        name="commentBody"
        id="commentBody"
        placeholder="Your comment here..."></textarea>
      <div className="post-comment" onClick={handleFormSubmit}>
        post
      </div>
    </div>
  );
}
