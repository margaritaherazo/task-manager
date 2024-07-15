import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
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

          <Switch>
            <Route path="/" exact>
              <TaskList />
              <TaskForm />
            </Route>
            <Route path="/profile">
              <UserProfile />
            </Route>
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;


