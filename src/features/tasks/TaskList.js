import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, removeList, toggleTask } from './TaskSlice';
import TaskForm from './TaskForm';

const TaskList = () => {
  const lists = useSelector((state) => state.tasks.lists);
  const dispatch = useDispatch();

  return (
    <div className="task-list-container">
      {lists.map((list) => (
        <div key={list.id} className="task-list">
          <h2>{list.title}</h2>
          <button onClick={() => dispatch(removeList(list.id))}>Remove List</button>
          <ul>
            {list.tasks.map((task) => (
              <li key={task.id}>
                <span
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  className={`task-item ${task.completed ? 'completed' : ''}`}
                  onClick={() => dispatch(toggleTask({ listId: list.id, taskId: task.id }))}
                >
                  {task.title}
                </span>
                <button onClick={() => dispatch(removeTask({ listId: list.id, taskId: task.id }))}>Remove Task</button>
              </li>
            ))}
          </ul>
          <TaskForm listId={list.id} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
