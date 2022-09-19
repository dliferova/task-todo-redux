import {createReducer} from '@reduxjs/toolkit';
import {Task} from '../../types/task';
import {newTaskAdded, taskDeleted} from "../actions";

type StateTypes = {
  tasks: Task[],
}

const initialState: StateTypes = {
  tasks: [],
}

export const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newTaskAdded, (state, action) => {
      const copyTasks = [...state.tasks]
      copyTasks.push(action.payload.task)
      state.tasks = copyTasks;
    })
    .addCase(taskDeleted, (state, action) => {
      const newTasks = [...state.tasks]
      const index = newTasks.findIndex(task => task.id === action.payload.taskId)
      if (index !== -1) {
        newTasks.splice(index, 1)
        state.tasks = newTasks
      }
    })
})

