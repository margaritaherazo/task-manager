import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.user);

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
    </header>
  );
};

export default Header;
