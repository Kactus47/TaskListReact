import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  editItem: {}
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, actions) => {
      const newTask = {
        id: state.items.length,
        status: false,
        ...actions.payload
      }
      state.items.push(newTask);
    },
    addTaskLS: (state, actions) => {
      state.items = actions.payload;
    },
    updateTask: (state, actions) => {
      const newTasks = state.items.map(task => {        
        if(task.id === actions.payload) {
          task.status = !task.status;
        }
        return task;
      })
      state.items = newTasks;
    },
    removeTask: (state, actions) => {
      const newTasks = state.items.filter(task => task.id !== actions.payload).map((task, index) => ({...task, id: index }));
      state.items = newTasks;
    },
    editTask: (state, actions) => {
      state.editItem = state.items.find(task => task.id === actions.payload);
    },
    editTaskSave: (state, actions) => {
      const newTasks = state.items.map(task => {        
        if(task.id === actions.payload.id) {
          task.title = actions.payload.title;
          task.description = actions.payload.description;
        }
        return task;
      })
      state.items = newTasks;
    },
  },
})

export const { addTask, updateTask, removeTask, editTask, editTaskSave, addTaskLS } = taskSlice.actions

export default taskSlice.reducer