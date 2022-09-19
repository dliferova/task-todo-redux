import {createAction} from '@reduxjs/toolkit';
import {Task} from "../types/task";

export enum ActionType {
  NewTaskAdded = 'task/new-task-added',
  TaskDeleted = 'task/task-deleted',
}

export const newTaskAdded = createAction(
  ActionType.NewTaskAdded,
  (task: Task) => ({
    payload: {
      task,
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
