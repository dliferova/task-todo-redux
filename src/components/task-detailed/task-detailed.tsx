import React from 'react';
import './styles.css';
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Task} from "../../types/task";
import NewTaskModal from "../modal/modal";
import Modal from "@material-ui/core/Modal";
import {Values} from "../add-new-task-form/add-new-task-form";
import {newSubtaskAdded} from "../../store/actions";

type TaskDetailedProps = {
  task: Task,
}

const TaskDetailed = ({task}: TaskDetailedProps) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: Values) => {
    dispatch(newSubtaskAdded({
      title: values.title,
      uniqueName: values.uniqueName,
      description: values.description,
      selectedType: values.selectedType,
      color: values.color
    }));
  }

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
        gridArea: 'details',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
      <div>
        <h2>Task Details</h2>
        <form>
          <ul className="detailed-task__param-list">
            <li>
              <p className="detailed-task__category">Task title</p>
              <input className="detailed-task__value" value={task.title} readOnly/>
            </li>

            <li>
              <p className="detailed-task__category">Unique Name</p>
              <input className="detailed-task__value" value={task.uniqueName} readOnly/>
            </li>

            <li>
              <p className="detailed-task__category">Type</p>
              <input className="detailed-task__value" value={task.type} readOnly/>
            </li>

            <li>
              <p className="detailed-task__category detailed-task__category_not-changed">Description</p>
              <p>{task.description}</p>
            </li>
          </ul>
        </form>
      </div>

      <div className="bottom">
        <Button
          variant="outlined"
          color="primary"
          href="#add-new-task"
          onClick={onAddNewTaskClick}
        >
          Add subtask
        </Button>
      </div>

      <Modal
        open={newTaskModalOpen}
        onClose={onNewTaskModalClosed}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <NewTaskModal onFormSubmit={handleSubmit}/>
      </Modal>
    </Box>
  )
};

export default TaskDetailed;



