export default function ArticleCard({ article }) {
  const { topic, created_at, title, votes, comment_count } = article;
  return (
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
  );
}
