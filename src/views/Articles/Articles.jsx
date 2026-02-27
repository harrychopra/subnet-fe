import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../../api/articles.js';
import ArticleCard from '../../components/ArticleCard/ArticleCard.jsx';
import ListSorter from '../../components/ListSorter/ListSorter.jsx';
import Loading from '../../components/Loading/Loading.jsx';
import './Articles.css';

export default function Articles({ currentUser }) {
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

  if (loading) return <Loading message="articles" />;
  if (error) return <p>{error}</p>;
  if (!articles) return null;

  return (
    <div className="articles">
      <ListSorter />
      {articles.map((article, idx) => {
        return (
          <ArticleCard
            article={article}
            currentUser={currentUser}
            key={idx + 1}
          />
        );
      })}
    </div>
  );
}
