// Mock function to simulate fetching tasks from an API
export const fetchTasks = async () => {
    return [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];
  };
  
  // Mock function to simulate adding a new task to the API
  export const addTask = async (task) => {
    return { id: Math.random(), ...task };
  };
  
  // Mock function to simulate updating a task in the API
  export const updateTask = async (task) => {
    return task;
  };
  
  // Mock function to simulate deleting a task from the API
  export const deleteTask = async (taskId) => {
    return taskId;
  };
  