import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasks/taskAPI';
import { setTasks, selectTasks } from '../features/tasks/taskSlice';

const useTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    // Fetch tasks from the API and dispatch an action to set tasks in the Redux store
    fetchTasks().then((tasksData) => {
      dispatch(setTasks(tasksData));
    });
  }, [dispatch]);

  return tasks;
};

export default useTasks;
