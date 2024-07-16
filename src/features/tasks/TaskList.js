import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, toggleTask } from './taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <span onClick={() => dispatch(toggleTask(task.id))}>{task.title}</span>
          <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
