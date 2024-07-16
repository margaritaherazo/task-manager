import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './TaskAPI';
import { addTask, selectTasks } from './taskSlice';
import TaskItem from '../../components/TaskItem';
import './TaskList.css';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    // Fetch tasks from the API and dispatch action to add tasks to Redux store
    fetchTasks().then((tasks) => {
      tasks.forEach(task => dispatch(addTask(task)));
    });
  }, [dispatch]);  // Include dispatch as dependency to avoid eslint warning

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
