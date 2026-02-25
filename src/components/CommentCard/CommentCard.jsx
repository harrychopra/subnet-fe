import { updateCommentVotes } from '../../api/comments.js';
import VoteControls from '../VoteControls/VoteControls.jsx';
import './CommentCard.css';

export default function CommentCard({ comment }) {
  const { comment_id, article_id, body, votes, author, created_at } = comment;

  return (
    <div className="comment-card">
      <div className="credit-bar">
        <div className="author">{author}</div>
        <div className="posted-ago">
          {new Date(created_at).toLocaleDateString()}
        </div>
      </div>
      <div className="body">{body}</div>
      <div className="reactions">
        <VoteControls
          id={comment_id}
          votes={votes}
          voteHandler={updateCommentVotes}
        />
      </div>
    </div>
  );
}
