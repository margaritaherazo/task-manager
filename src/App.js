import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './features/tasks/TaskList';
import ListForm from './features/tasks/ListForm';
import UserProfile from './features/user/UserProfile';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';
import './styles/theme.css';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<><ListForm /><TaskList /></>} />
            <Route path="/profile" element={<UserProfile />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;