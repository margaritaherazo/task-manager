import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
