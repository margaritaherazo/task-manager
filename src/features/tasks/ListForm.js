import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from './taskSlice';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="centered-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new list"
        required
      />
      <button type="submit">Add List</button>
    </form>
  );
};

export default ListForm;
