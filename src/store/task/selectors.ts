import {NameSpace, RootState} from '../root-reducer';
import {Task} from '../../types/task';
import {findTask} from "../../utils";

type State = RootState;

export const getTaskList = (state: State): Task[] => state[NameSpace.Tasks].tasks;
export const getDetailedTask = (state: State): Task | null => {
  const tasksState = state[NameSpace.Tasks]
  return findTask(tasksState.tasks, tasksState.detailedTaskId);
}

export const getDetailedSubtask = (state: State): Task | null => {
  const tasksState = state[NameSpace.Tasks]
  return findTask(tasksState.tasks, tasksState.detailedSubtaskId);
}
