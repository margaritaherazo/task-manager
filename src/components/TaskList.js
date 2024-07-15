import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../features/tasks/taskSlice';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={() => handleDelete(task.id)} />
      ))}
    </div>
  );
};

export default TaskList;
