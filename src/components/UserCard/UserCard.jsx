import { Link } from 'react-router-dom';
import './UserCard.css';

export default function UserCard({ user, setUser }) {
  const { username, name, avatar_url } = user;

  return (
    <div
      className="user-card"
      onClick={() => {
        setUser(user);
      }}>
      <div className="info">
        <div className="username">{username}</div>
        <div className="full-name">
          <div className="name">{name}</div>
        </div>
      </div>
      <img className="avatar" src={avatar_url} alt={username} />
    </div>
  );
}
