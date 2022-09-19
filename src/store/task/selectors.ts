import {NameSpace, RootState} from '../root-reducer';
import {Task} from '../../types/task';

type State = RootState;

export const getTaskList = (state: State): Task[] => state[NameSpace.Tasks].tasks;
export const getDetailedTask = (state: State): Task | null => {
  const tasksState = state[NameSpace.Tasks]
  const detailedTask = tasksState.tasks.find(task => task.id === tasksState.detailedTask)
  return detailedTask ? detailedTask : null;
}
