import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const initialState = {
    tasks: [
    ]
    
}

export const tasksSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload
        },
        addNewTask: (state, action) => {
            state.tasks = [...state.tasks, {
                id: uuid(),
                title: action.payload.title,
                status: action.payload.status
            }]
        },
        updateTaskStatus: (state, action) => {
            state.tasks.map((task) => {
                if(task.id == action.payload){
                  task.status = !task.status
                }
                return task
            })
        },
        deleteTask: (state, action) => {
            const filterTasks = state.tasks.filter(task => task.id != action.payload)
            state.tasks = filterTasks
        }
    }
})

export const { setTasks, addNewTask, updateTaskStatus, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer