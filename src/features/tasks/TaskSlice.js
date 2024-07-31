import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.lists.push({
        id: Date.now(),
        title: action.payload.title,
        tasks: [],
      });
    },
    removeList: (state, action) => {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },
    addTask: (state, action) => {
      const list = state.lists.find(list => list.id === action.payload.listId);
      if (list) {
        list.tasks.push({ id: Date.now(), title: action.payload.title });
      }
    },
    removeTask: (state, action) => {
      const list = state.lists.find(list => list.id === action.payload.listId);
      if (list) {
        list.tasks = list.tasks.filter(task => task.id !== action.payload.taskId);
      }
    },
    toggleTask: (state, action) => {
      const list = state.lists.find(list => list.id === action.payload.listId);
      if (list) {
        const task = list.tasks.find(task => task.id === action.payload.taskId);
        if (task) {
          task.completed = !task.completed;
        }
      }
    },
  },
});

export const { addList, removeList, addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
