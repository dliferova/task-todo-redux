import React from 'react';
import './styles.css';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Task from "../ui/task/task";
import Modal from "@material-ui/core/Modal";
import NewTaskModal from "../modal/modal";

const TaskList = () => {
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
        border: '1px solid #25283b'
      }}>
      <h2>Task List</h2>
      <ul className="task-list">
        <li>
          <Task/>
        </li>
        <li>
          <Task/>
        </li>
        <Button
          variant="outlined"
          color="primary"
          href="#add-new-task"
          style={{
            marginBottom: "18px"
          }}
          onClick={onAddNewTaskClick}
        >
          Add new task
        </Button>
        <Modal
          open={newTaskModalOpen}
          onClose={onNewTaskModalClosed}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <NewTaskModal/>
        </Modal>
      </ul>
    </Box>
  );
};

export default TaskList;
