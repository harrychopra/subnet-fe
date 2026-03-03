import { useNavigate } from 'react-router-dom';
import './TopicCard.css';

export default function TopicCard({ topic }) {
  const { slug, description } = topic;
  const navigate = useNavigate();
  return (
    <div
      className="topic-card"
      onClick={() => {
        navigate(`/articles?topic=${slug}`);
      }}>
      <div className="slug">{slug}</div>
      <div className="description">{description}</div>
    </div>
  );
}
