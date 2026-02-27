import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const [isToggled, toggleMenu] = useState(false);

  // blur fires before the click event registers
  const preventBlur = e => e.preventDefault();

  return (
    <nav className="nav" onBlur={() => toggleMenu(false)}>
      <button
        className={isToggled ? 'hamburger hamburger-open' : 'hamburger'}
        onClick={() => toggleMenu(!isToggled)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={isToggled ? 'menu menu-open' : 'menu'}>
        <li>
          <Link to="/articles" onMouseDown={preventBlur}>
            Articles
          </Link>
        </li>
        <li>
          <Link to="/users" onMouseDown={preventBlur}>
            Users
          </Link>
        </li>
        <li>
          <Link to="/topics" onMouseDown={preventBlur}>
            Topics
          </Link>
        </li>
      </ul>
    </nav>
  );
}
