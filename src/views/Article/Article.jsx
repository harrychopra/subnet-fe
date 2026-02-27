import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById, updateArticleVotes } from '../../api/articles.js';
import CommentForm from '../../components/CommentForm/CommentForm.jsx';
import Comments from '../../components/Comments/Comments.jsx';
import Loading from '../../components/Loading/Loading.jsx';
import VoteControls from '../../components/VoteControls/VoteControls.jsx';
import './Article.css';

export default function Articles() {
  const [state, setState] = useState({
    article: null,
    error: null,
    loading: true,
    showCommentForm: false,
  });

  const { articleId } = useParams();

  useEffect(() => {
    setState({ ...state, loading: true });
    (async () => {
      try {
        const article = await fetchArticleById(articleId);
        setState({ ...state, article, loading: false });
      } catch (error) {
        setState({
          ...state,
          error: error.message || 'Failed to fetch articles',
          loading: false,
        });
      }
    })();
  }, [articleId]);

  const handleShowCommentForm = () => {
    setState({ ...state, showCommentForm: true });
  };

  const handleHideCommentForm = () => {
    setState({ ...state, showCommentForm: false });
  };

  const handleUnshiftNewComment = () => {
    setState({ ...state, showCommentForm: false });
  };

  const { article, error, loading, showCommentForm } = state;

  if (loading) return <Loading message="article" />;
  if (error) return <p>{error}</p>;
  if (!article) return null;

  const { title, article_img_url, topic, body, author, created_at, votes } =
    article;

  return (
    <>
      <div className="article">
        <div className="credit-bar">
          <div className="slug-author">
            <div className="slug-name">{topic}</div>
            <div className="author">{author}</div>
          </div>
          <div className="posted-ago">
            {new Date(created_at).toLocaleDateString()}
          </div>
        </div>
        <div className="title-image-body">
          {article_img_url && (
            <img src={article_img_url} alt={title} className="thumb" />
          )}
          <div className="title">{title}</div>
          <div className="body">{body}</div>
        </div>

        <div className="reactions">
          <VoteControls
            id={articleId}
            votes={votes}
            voteHandler={updateArticleVotes}
          />
          <div
            className="add-comment"
            onClick={
              showCommentForm ? handleHideCommentForm : handleShowCommentForm
            }>
            {showCommentForm ? 'cancel' : 'add comment'}
          </div>
        </div>
      </div>
      {showCommentForm ? (
        <CommentForm
          articleId={articleId}
          author={author}
          hideCommentForm={handleHideCommentForm}
        />
      ) : (
        <Comments articleId={articleId} />
      )}
    </>
  );
}
