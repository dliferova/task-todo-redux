import {combineReducers} from '@reduxjs/toolkit';
import {tasksReducer} from "./task/task-reducer";

export enum NameSpace {
  Tasks = 'TASKS'
}

export const rootReducer = combineReducers({
  [NameSpace.Tasks]: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
