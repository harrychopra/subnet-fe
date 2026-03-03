import { useEffect, useState } from 'react';
import { fetchTopics } from '../../api/topics.js';
import Loading from '../../components/Loading/Loading.jsx';
import TopicCard from '../../components/TopicCard/TopicCard.jsx';
import './Topics.css';

export default function Topics() {
  const [state, setState] = useState({
    topics: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchTopics()
      .then(topics => {
        setState({ ...state, topics, loading: false });
      })
      .catch(error =>
        setState({
          ...state,
          error: error.message || 'Failed to fetch topics',
          loading: false,
        }),
      );
  }, []);

  const { topics, error, loading } = state;

  if (loading) return <Loading message="topics" />;
  if (error) return <p>{error}</p>;
  if (!topics) return null;

  return (
    <div className="topics">
      {topics.map((topic, idx) => {
        return <TopicCard topic={topic} key={idx + 1} />;
      })}
    </div>
  );
}
