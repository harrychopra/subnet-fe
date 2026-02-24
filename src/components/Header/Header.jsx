import { Link, Links } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="menu-logo">
        <div className="menu">
          <Link to="/not-implemented">&#8801;</Link>
        </div>
        <div className="logo">
          <Link to="/">Subnet</Link>
        </div>
      </div>
      <img className="avatar" src="../assets/avatar.png" alt="avatar" />
    </header>
  );
}
