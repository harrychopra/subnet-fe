import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../../api/articles.js';
import { fetchCommentsByArticleId } from '../../api/comments.js';
import Comments from '../../components/Comments/Comments.jsx';
import Loading from '../../components/Loading/Loading.jsx';
import './Article.css';

export default function Articles() {
  const [state, setState] = useState({
    article: null,
    error: null,
    loading: true,
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

  const { article, error, loading } = state;

  if (loading) return <Loading message="article" />;
  if (error) return <p>{error}</p>;
  if (!article) return null;

  const { title, topic, body, author, created_at, votes, comment_count } =
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
        <div className="title">{title}</div>
        <div className="body">{body}</div>
        <div className="reactions">
          <div className="votes-control">{votes}</div>
        </div>
      </div>
      <Comments articleId={articleId} />
    </>
  );
}
