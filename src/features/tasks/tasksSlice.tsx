import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type Task = {
  content: string,
  done: boolean,
  id: string,
}
interface InitialState {
  tasks: Task[],
  hideDone: boolean,
};

const initialState: InitialState = {
  tasks: [],
  hideDone: false,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload: task}:PayloadAction<Task>) => {
      state.tasks.push(task);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: task }:PayloadAction<Task>) => {
    const index = tasks.findIndex(({ id } ) => id === task.id);
    tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: task }:PayloadAction<Task>) => {
      const index = tasks.findIndex(({ id }) => id === task.id);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
        }
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
} = tasksSlice.actions;

export const selectTasksState = (state: RootState) => state.tasks;

export const selectTasks = (state:  RootState) => selectTasksState(state).tasks;
export const selectHideDone = (state: RootState) => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = (state: RootState) => selectTasks(state).every(({ done }) => done);
export const selectAreTaskEmpty = (state: RootState) => selectTasks(state).length === 0;

export const getTaskById = (state: RootState, taskId: string | null) =>
selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state: RootState, query: string | null) => {
  const tasks = selectTasks(state);
  if(!query || query.trim() === "") {
    return tasks;
  };
  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;