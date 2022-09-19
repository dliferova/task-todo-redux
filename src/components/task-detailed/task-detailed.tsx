import React from 'react';
import {useSelector} from 'react-redux';
import {getDetailedTask} from "../../store/task/selectors";
import TaskComponent from "../ui/task/task-component";

const TaskDetailed = () => {
  const detailedTask =  useSelector(getDetailedTask);

  return (
    detailedTask ? <TaskComponent task={detailedTask}/> : null
  )
};

export default TaskDetailed;
