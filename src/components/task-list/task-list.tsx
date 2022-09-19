import React from 'react';
import './styles.css';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import TaskComponent from "../ui/task/task-component";
import Modal from "@material-ui/core/Modal";
import NewTaskModal from "../modal/modal";
import {Task} from '../../types/task';

type TaskListProps = {
  tasks: Task[]
}

const TaskList = (props: TaskListProps): JSX.Element => {
  const [newTaskModalOpen, setNewTaskModalOpen] = React.useState(false);

  const onAddNewTaskClick = () => {
    setNewTaskModalOpen(true);
  };

  const onNewTaskModalClosed = () => {
    setNewTaskModalOpen(false);
  };

  return (
    <Box
      style={{
        borderRight: '1px solid #25283b',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
      <div>
        <h2>Task List</h2>
        <ul className="task-list">
          {props.tasks.map((item, index) =>
            <TaskComponent key={index} task={item}/>
          )}
        </ul>
      </div>
      <div className="bottom">
        <Button
          variant="outlined"
          color="primary"
          href="#add-new-task"
          onClick={onAddNewTaskClick}
        >
          Add new task
        </Button>
      </div>

        <Modal
          open={newTaskModalOpen}
          onClose={onNewTaskModalClosed}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <NewTaskModal  />
        </Modal>
    </Box>
  );
};

export default TaskList;
