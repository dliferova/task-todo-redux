import {NameSpace, RootState} from '../root-reducer';
import {Task} from '../../types/task';

type State = RootState;

export const getTaskList = (state: State): Task[] => state[NameSpace.Tasks].tasks;
export const getDetailedTask = (state: State): Task | null => {
  const tasksState = state[NameSpace.Tasks]

  for (let i = 0; i < tasksState.tasks.length; i++) {
    const task = tasksState.tasks[i];
    if (task.id === tasksState.detailedTaskId) {
      return task
    } else {
      const found = task.children?.find(subtask => subtask.id === tasksState.detailedTaskId)
      if (found) {
        return found
      }
    }
  }
  return null;
}
