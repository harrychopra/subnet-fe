import { useEffect, useState } from 'react';
import { deleteComment, fetchCommentsByArticleId } from '../../api/comments.js';
import { useUser } from '../../context/UserContext.jsx';
import CommentCard from '../CommentCard/CommentCard.jsx';
import Loading from '../Loading/Loading.jsx';
import './Comments.css';

export default function Comments({ articleId }) {
  const [state, setState] = useState({
    comments: null,
    loading: true,
    error: null,
  });

  const { user } = useUser();

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

  const handleDeleteComment = comment => {
    if (comment.author !== user.username) return;

    setState({ ...state, loading: true });

    const fn = async () => {
      try {
        await deleteComment(comment.comment_id);
        setState({
          ...state,
          comments: state.comments.filter(
            ({ comment_id: id }) => id !== comment.comment_id,
          ),
        });
      } catch (error) {
        setState({
          ...state,
          loading: false,
          error: error.message || 'Failed to delete comment',
        });
      }
    };
    fn();
  };

  const { comments, error, loading } = state;

  if (loading) return <Loading message="comments" />;
  if (error) return <p>{error}</p>;
  if (!comments) return null;

  return (
    <>
      <div className="comment-heading">{comments.length} comments</div>
      <div className="comments">
        {comments.map(comment => (
          <CommentCard
            comment={comment}
            handleDeleteComment={handleDeleteComment}
            signedInUsername={user.username}
            key={comment.comment_id}
          />
        ))}
      </div>
    </>
  );
}
