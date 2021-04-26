import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './features/tasks/tasksSlice'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;