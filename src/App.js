import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './features/tasks/TaskForm';
import UserProfile from './features/user/UserProfile';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './styles/global.css';
import './styles/theme.css';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<><TaskList /><TaskForm /></>} />
          <Route path="/profile" element={<UserProfile />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
};

const AppWithTheme = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithTheme;
