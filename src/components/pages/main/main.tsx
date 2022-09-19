import React from 'react';
import {useSelector} from "react-redux";
import './styles.css';
import Box from '@material-ui/core/Box';
import {Container} from "@material-ui/core";
import TaskList from "../../task-list/task-list";
import {getTaskList} from "../../../store/task/selectors";
import TaskDetailed from "../../task-detailed/task-detailed";

const Main = () => {
  const tasks = useSelector(getTaskList);

  return (
    <Container
      maxWidth={"xl"}
      style={{
        marginBottom: '70px'
      }}
    >
      <div className="main main__container">
        <TaskList tasks={tasks}/>
        <TaskDetailed/>


        <div className="hidden">
          <Box>
            <h2>Task Details</h2>
          </Box>
          <Box>
            <h2>Children Task</h2>
          </Box>
        </div>


      </div>
    </Container>
  );
};

export default Main;
