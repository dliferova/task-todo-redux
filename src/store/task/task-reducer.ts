import {createReducer} from '@reduxjs/toolkit';
import {Task} from '../../types/task';
import {detailedTaskOpened, newTaskAdded, taskDeleted} from "../actions";
import {nanoid} from "nanoid";

type StateTypes = {
  tasks: Task[],
  detailedTask: string | null,
}

const initialState: StateTypes = {
  tasks: [{
    id: 'X1CEbGsHm23FHS_63VJE8',
    color: '',
    description: 'Default task description',
    picked: 'type-personal',
    title: 'task1',
    uniqueName: 'task1'
  },
    {
      id: 'cbzVYQX_lubakjh9CoWsH',
      color: '',
      description: 'Default task description',
      picked: 'type-personal',
      title: 'task2',
      uniqueName: 'task2'
    }],
  detailedTask: null,
}

export const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newTaskAdded, (state, action) => {
      const newTask: Task = {
        id: nanoid(),
        color: action.payload.request.color,
        description: "Default task description",
        picked: action.payload.request.picked,
        title: action.payload.request.title,
        uniqueName: action.payload.request.uniqueName
      }
      state.tasks.push(newTask)
    })
    .addCase(taskDeleted, (state, action) => {
      const newTasks = [...state.tasks]
      const index = newTasks.findIndex(task => task.id === action.payload.taskId)
      if (index !== -1) {
        newTasks.splice(index, 1)
        state.tasks = newTasks
      }
    })
    .addCase(detailedTaskOpened, (state, action) => {
      state.detailedTask = action.payload.taskId
    })
})

