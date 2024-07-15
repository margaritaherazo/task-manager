import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="New Task" 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
