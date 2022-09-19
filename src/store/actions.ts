import {createAction} from '@reduxjs/toolkit';

export enum ActionType {
  NewTaskAdded = 'task/new-task-added',
  TaskDeleted = 'task/task-deleted',
  DetailedTaskOpen = 'task/detailed-task-open',
}

interface NewTaskRequest {
  title: string,
  uniqueName: string,
  picked: string,
  color: string
}

export const newTaskAdded = createAction(
  ActionType.NewTaskAdded,
  (request: NewTaskRequest) => ({
    payload: {
      request
    },
  }),
);

export const taskDeleted = createAction(
  ActionType.TaskDeleted,
  (taskId: string) => ({
    payload: {
      taskId,
    },
  }),
);

export const detailedTaskOpened = createAction(
  ActionType.DetailedTaskOpen,
  (taskId: string) => ({
    payload: {
      taskId,
    }
  })
)
