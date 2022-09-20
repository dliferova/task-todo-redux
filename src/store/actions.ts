import {createAction} from '@reduxjs/toolkit';
import {Task} from "../types/task";

export enum ActionType {
  NewTaskAdded = 'task/new-task-added',
  NewSubtaskAdded = 'subtask/new-subtask-added',
  TaskUpdated = 'task/task-updated',
  TaskDeleted = 'task/task-deleted',
  SubtaskDeleted = 'subtask/subtask-deleted',
  DetailedTaskOpen = 'task/detailed-task-open',
}

export interface NewTaskRequest {
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

export const newSubtaskAdded = createAction(
  ActionType.NewSubtaskAdded,
  (request: NewTaskRequest) => ({
    payload: {
      request
    },
  }),
);

export const taskUpdated = createAction(
  ActionType.TaskUpdated,
  (updatedTask: Task) => ({
    payload: {
      updatedTask: updatedTask,
    },
  })
)

export const taskDeleted = createAction(
  ActionType.TaskDeleted,
  (taskId: string) => ({
    payload: {
      taskId,
    },
  }),
);

export const subtaskDeleted = createAction(
  ActionType.SubtaskDeleted,
  (subtaskId: string) => ({
    payload: {
      subtaskId,
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
