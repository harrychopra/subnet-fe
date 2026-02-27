import { Link } from 'react-router-dom';
import { updateArticleVotes } from '../../api/articles.js';
import VoteControls from '../VoteControls/VoteControls.jsx';
import './ArticleCard.css';

export default function ArticleCard({ article }) {
  const {
    article_id,
    topic,
    article_img_url,
    created_at,
    title,
    votes,
    comment_count,
  } = article;
  return (
    <div className="article-card">
      <div className="credit-bar">
        <div className="slug-name">{topic}</div>
        <div className="posted-ago">
          {new Date(created_at).toLocaleDateString()}
        </div>
      </div>
      <div className="title-image">
        <div className="title">
          <Link to={`/articles/${article_id}`}>{title}</Link>
        </div>
        {article_img_url && (
          <img src={article_img_url} alt={title} className="thumb" />
        )}
      </div>

      <div className="reactions">
        <VoteControls
          id={article_id}
          votes={votes}
          voteHandler={updateArticleVotes}
        />
        <div className="comment-count">{comment_count}</div>
      </div>
    </div>
  );
}
