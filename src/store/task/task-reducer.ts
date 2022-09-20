import {createReducer} from '@reduxjs/toolkit';
import {Subtask, Task} from '../../types/task';
import {
  detailedTaskOpened,
  newSubtaskAdded,
  newTaskAdded,
  NewTaskRequest,
  subtaskDeleted,
  taskDeleted,
  taskUpdated
} from "../actions";
import {nanoid} from "nanoid";

type StateTypes = {
  tasks: Task[],
  detailedTaskId: string | null,
}

const initialState: StateTypes = {
  tasks: [{
    id: 'X1CEbGsHm23FHS_63VJE8',
    color: '',
    description: 'Default task description',
    picked: 'personal',
    title: 'task1',
    uniqueName: 'task1',
    children: [
      {
        id: 'X1CEbGs8',
        color: '',
        description: 'Default subtask description',
        picked: 'personal',
        title: 'subtask1',
        uniqueName: 'subtask1',
      },
      {
        id: 'X1Cinn',
        color: '',
        description: 'Default task description',
        picked: 'personal',
        title: 'subtask2',
        uniqueName: 'subtask2',
      }
    ]
  },
    {
      id: 'cbzVYQX_lubakjh9CoWsH',
      color: '',
      description: 'Default subtask description',
      picked: 'personal',
      title: 'task2',
      uniqueName: 'task2',
      children: []
    }],
  detailedTaskId: null,
}

const createNewTask = (data: NewTaskRequest): Task => {
  return {
    id: nanoid(),
    color: data.color,
    description: "Default task description",
    picked: data.picked,
    title: data.title,
    uniqueName: data.uniqueName,
    children: []
  }
}

const createNewSubtask = (data: NewTaskRequest): Subtask => {
  return {
    id: nanoid(),
    color: data.color,
    description: "Default task description",
    picked: data.picked,
    title: data.title,
    uniqueName: data.uniqueName
  }
}


export const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newTaskAdded, (state, action) => {
      const newTask: Task = createNewTask(action.payload.request)
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
      state.detailedTaskId = action.payload.taskId
    })
    .addCase(taskUpdated, (state, action) => {
      state.tasks = updateTasks(state.tasks, action.payload.updatedTask);

      if (state.detailedTaskId === action.payload.updatedTask.id) {
        state.detailedTaskId = action.payload.updatedTask.id
      }
    })
    .addCase(newSubtaskAdded, (state, action) => {
      const parent = state.tasks.find(task => task.id === state.detailedTaskId)
      const newSubtask = createNewSubtask(action.payload.request)
      if (parent) {
        parent.children.push(newSubtask)
      }
    })
    .addCase(subtaskDeleted, (state, action) => {
      const parent = state.tasks.find(task => task.id === state.detailedTaskId)
      if (parent) {
        const childIndex = parent.children.findIndex(task => task.id === action.payload.subtaskId);
        parent.children =
          [...parent.children.slice(0, childIndex),
            ...parent.children.slice(childIndex + 1)
          ]
      }
    })
})

const updateTasks = (tasks: Task[], updatedTask: Task): Task[] => {
  const index = tasks.findIndex((task) => task.id === updatedTask.id);

  if (index === -1) {
    return tasks
  }

  return [
    ...tasks.slice(0, index),
    updatedTask,
    ...tasks.slice(index + 1)
  ];
};
