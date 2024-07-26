import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './features/tasks/TaskList';
import TaskForm from './features/tasks/TaskForm';
import UserProfile from './features/user/UserProfile';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<><TaskList /><TaskForm /></>} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
