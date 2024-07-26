import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const user = useSelector((state) => state.user);
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {/* Add other links as needed */}
        </ul>
      </nav>
      {user.name && <div className="user-info">{user.name}</div>}
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </header>
  );
};

export default Header;

