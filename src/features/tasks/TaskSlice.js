import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), title: action.payload.title });
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    updateTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.title = title;
      }
    }
  },
});

export const { addTask, removeTask, toggleTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;

