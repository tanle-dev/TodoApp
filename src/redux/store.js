import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'

export const store = configureStore({
  reducer: {
    task: tasksReducer
  },
})