import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.jsx';
import Nav from '../Nav/Nav.jsx';
import './Header.css';

export default function Header() {
  const { user } = useUser();
  return (
    <header>
      <div className="menu-logo">
        <Nav />
        <div className="logo">
          <Link to="/">Subnet</Link>
        </div>
      </div>
      <img
        className="avatar"
        src={user ? user.avatar_url : '../assets/avatar.png'}
        title={user ? user.username : 'Not logged in'}
        alt="user avatar"
      />
    </header>
  );
}
