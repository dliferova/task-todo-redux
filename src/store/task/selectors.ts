import {NameSpace, RootState} from '../root-reducer';
import {Task} from '../../types/task';

type State = RootState;

export const getTaskList = (state: State): Task[] => state[NameSpace.Tasks].tasks;
