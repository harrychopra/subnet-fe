import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';
import './UserCard.css';

export default function UserCard({ user }) {
  const { username, name, avatar_url } = user;
  const navigate = useNavigate();
  const { dispatch } = useUser();
  return (
    <div
      className="user-card"
      onClick={() => {
        dispatch({ type: 'SET_USER', payload: user });
        navigate('/');
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
