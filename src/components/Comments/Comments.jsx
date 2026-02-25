import { useEffect, useState } from 'react';
import { fetchCommentsByArticleId } from '../../api/comments.js';
import CommentCard from '../CommentCard/CommentCard.jsx';
import Loading from '../Loading/Loading.jsx';
import './Comments.css';

export default function Comments({ articleId }) {
  const [state, setState] = useState({
    comments: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchCommentsByArticleId(articleId)
      .then(comments => setState({ ...state, comments, loading: false }))
      .catch(error => {
        setState({
          ...state,
          loading: false,
          error: error.message || 'Failed to fetch comments',
        });
      });
  }, [articleId]);

  const { comments, error, loading } = state;

  if (loading) return <Loading message="comments" />;
  if (error) return <p>{error}</p>;
  if (!comments) return null;

  return (
    <>
      <div className="comment-heading">{comments.length} comments</div>
      <div className="comments">
        {comments.map(comment => (
          <CommentCard comment={comment} key={comment.comment_id} />
        ))}
      </div>
    </>
  );
}
