import {Task} from "./types/task";

export const findTask = (array: Task[], id: string | null): Task | null => {
  for (let i = 0; i < array.length; i++) {
    const task = array[i];
    if (task.id === id) {
      return task
    } else {
      const found = task.children?.find(subtask => subtask.id === id)
      if (found) {
        return found
      }
    }
  }
  return null;
}
