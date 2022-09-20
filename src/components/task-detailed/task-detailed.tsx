import React from 'react';
import './styles.css';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Task} from "../../types/task";

type TaskDetailedProps = {
  task: Task
}

const TaskDetailed = ({task}: TaskDetailedProps) => {
  return (
    <Box
      style={{
        borderRight: '1px solid #25283b',
        padding: '10px',
        gridArea: 'details',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
      <div>
        <h2>Task Details</h2>

        <div className="detailed-task">
          <div className="detailed-task__wrapper">
            <div className="detailed-task__header">
              <h3>{task.title}</h3>
              <span>{task.uniqueName}</span>
            </div>
            <div className="detailed-task__body">
              <div className="detailed-task__type">
                <p>{task.picked}</p>
              </div>
              <div className="detailed-task__colorpicker">
                <div>{task.color}</div>
              </div>
              <div className="detailed-task__description">
                <p>{task.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <Button
          variant="outlined"
          color="primary"
          href="#add-new-task"
        >
          Add subtask
        </Button>
      </div>
    </Box>
  )
};

export default TaskDetailed;



