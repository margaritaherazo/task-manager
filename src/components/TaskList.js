import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../features/tasks/TaskSlice';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();

  const handleDelete = id => {
    dispatch(removeTask(id));
  };

  return (
    <TaskListWrapper theme={theme}>
      <h1>Task List</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/tasks/new">Add New Task</Link>
    </TaskListWrapper>
  );
};

const TaskListWrapper = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#333')};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  padding: 20px;
`;

export default TaskList;
