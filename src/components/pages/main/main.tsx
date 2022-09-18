import React from 'react';
import './styles.css';
import Box from '@material-ui/core/Box';
import {Container} from "@material-ui/core";
import Task from "../../ui/task/task";

const Main = () => {
  return (
    <Container
      maxWidth={"xl"}
      style={{
        marginBottom: '110px'
      }}
    >
      <div className="main main__container">
        <Box
          style={{
            border: '1px solid #25283b'
        }}>
          <h2>Task List</h2>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
        </Box>
        <Box
          style={{
            border: '1px solid #25283b'
          }}>
          <h2>Task Details</h2>
        </Box>
        <Box
          style={{
            border: '1px solid #25283b'
          }}>
          <h2>Children Task</h2>
        </Box>
      </div>
    </Container>
  );
};

export default Main;
