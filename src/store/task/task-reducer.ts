import {createReducer} from '@reduxjs/toolkit';
import {Task} from '../../types/task';
import {
  detailedSubtaskOpened,
  detailedTaskOpened,
  newSubtaskAdded,
  newTaskAdded,
  NewTaskRequest,
  subtaskDeleted,
  taskDeleted,
  taskUpdated
} from "../actions";
import {nanoid} from "nanoid";
import {findTask} from "../../utils";

type StateTypes = {
  tasks: Task[],
  detailedTaskId: string | null,
  detailedSubtaskId: string | null,
}

const initialState: StateTypes = {
  tasks: [{
    id: 'X1CEbGsHm23FHS_63VJE8',
    color: '',
    description: 'Create your not-to-do list',
    type: 'Personal task',
    title: 'Plan you time',
    uniqueName: 'task1',
    children: [
      {
        id: 'X1CEbGs8',
        color: '',
        description: 'Set time for yourself',
        type: 'Personal task',
        title: 'Allow for flexibility',
        uniqueName: 'subtask1',
        children: null
      },
      {
        id: 'X1Cinn',
        color: '',
        description: 'Plan and book your holidays in advance',
        type: 'Personal task',
        title: 'Give yourself some space',
        uniqueName: 'subtask2',
        children: null
      }
    ]
  },
    {
      id: 'cbzVYQX_lubakjh9CoWsH',
      color: '',
      description: 'Work on a side project',
      type: 'Development task',
      title: 'Work on a side project',
      uniqueName: 'task2',
      children: []
    }],
  detailedTaskId: null,
  detailedSubtaskId: null,
}

const createNewTask = (data: NewTaskRequest, isSubtask: Boolean): Task => {
  return {
    id: nanoid(),
    color: data.color,
    description: data.description,
    type: data.selectedType,
    title: data.title,
    uniqueName: data.uniqueName,
    children: isSubtask ? null : []
  }
}

export const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newTaskAdded, (state, action) => {
      const newTask: Task = createNewTask(action.payload.request, false)
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
      state.detailedTaskId = action.payload.taskId;
      state.detailedSubtaskId = null
    })
    .addCase(detailedSubtaskOpened, (state, action) => {
      state.detailedSubtaskId = action.payload.subtaskId
    })
    .addCase(taskUpdated, (state, action) => {
      const taskToEdit = findTask(state.tasks, action.payload.taskId);
      if (taskToEdit) {
        taskToEdit.title = action.payload.title
        taskToEdit.uniqueName = action.payload.uniqueName
        taskToEdit.type = action.payload.selectedType
      }
    })
    .addCase(newSubtaskAdded, (state, action) => {
      const parent = state.tasks.find(task => task.id === state.detailedTaskId)
      const newSubtask = createNewTask(action.payload.request, true)
      if (parent && parent.children) {
        parent.children.push(newSubtask)
      }
    })
    .addCase(subtaskDeleted, (state, action) => {
      const parent = state.tasks.find(task => task.id === state.detailedTaskId)
      if (parent && parent.children) {
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
