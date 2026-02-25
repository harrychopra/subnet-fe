import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../../api/articles.js';
import './Articles.css';

export default function Articles() {
  const [state, setState] = useState({
    articles: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    fetchArticles()
      .then(articles => {
        setState({ ...state, articles, loading: false });
      })
      .catch(error =>
        setState({
          ...state,
          error: error.message || 'Failed to fetch articles',
          loading: false,
        }),
      );
  }, []);

  const { articles, error, loading } = state;

  if (loading) return <p>Loading Articles...</p>;
  if (error) return <p>{error}</p>;
  if (!articles) return null;

  return (
    <div className="articles">
      <div>
        <form className="sort-control">
          <select>
            <option>New</option>
          </select>
          <select>
            <option>Asc</option>
          </select>
        </form>
      </div>
      {articles.map(
        (
          { article_id, title, topic, created_at, votes, comment_count },
          idx,
        ) => {
          return (
            <Link to={`/articles/${article_id}`} key={idx}>
              <div className="article-card">
                <div className="credit-bar">
                  <div className="slug-name">{topic}</div>
                  <div className="posted-ago">
                    {new Date(created_at).toLocaleDateString()}
                  </div>
                </div>
                <div className="title">{title}</div>
                <div className="reactions">
                  <div className="votes-control">{votes}</div>
                  <div className="comment-count">{comment_count}</div>
                </div>
              </div>
            </Link>
          );
        },
      )}
    </div>
  );
}
