import React from 'react';
import {useSelector} from "react-redux";
import './styles.css';
import {Container} from "@material-ui/core";
import TaskList from "../../task-list/task-list";
import {getDetailedTask, getDetailedSubtask, getTaskList} from "../../../store/task/selectors";
import TaskDetailed from "../../task-detailed/task-detailed";
import SubtaskList from "../../subtask-list/subtask-list";

const Main = () => {
  const tasks = useSelector(getTaskList);

  const detailedTask = useSelector(getDetailedTask); //null | string
  const detailedSubtask = useSelector(getDetailedSubtask); //null | string

  const taskDetailed = detailedSubtask !== null ? detailedSubtask : detailedTask

  return (
    <Container
      maxWidth={"xl"}
      style={{
        marginBottom: '70px'
      }}
    >
      <div className="main main__container">
        <TaskList tasks={tasks}/>
        {detailedTask && taskDetailed ?
          <>
            <TaskDetailed task={taskDetailed} />
            <SubtaskList children={detailedTask.children}/>
          </>
          :null
        }
      </div>
    </Container>
  );
};

export default Main;
