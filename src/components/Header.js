import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from '../context/ThemeContext';
import logo from '../imgs/logo.png';

const Header = () => {
  const user = useSelector((state) => state.user);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Task Manager</h1>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div className="header-right">
        {user.name && <div className="user-info">{user.name}</div>}
        <button onClick={toggleTheme} className="theme-switcher">
           {theme === 'light' ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )} 
        </button>
      </div>
    </header>
  );
};

export default Header;
