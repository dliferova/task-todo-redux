import React from 'react';
import './styles.css';
import {useDispatch} from "react-redux";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import TaskComponent from "../task/task-component";
import Modal from "@material-ui/core/Modal";
import NewTaskModal from "../modal/modal";
import {Task} from '../../types/task';
import {Values} from "../add-new-task-form/add-new-task-form";
import {newTaskAdded, taskDeleted} from "../../store/actions";

type TaskListProps = {
  tasks: Task[]
}

const TaskList = (props: TaskListProps): JSX.Element => {
  const dispatch = useDispatch();

  const handleSubmit = (values: Values) => {
    dispatch(newTaskAdded({
      title: values.title,
      uniqueName: values.uniqueName,
      picked: values.picked,
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

  const handleDelete = (id: string) => {
   dispatch(taskDeleted(id))
  }

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
            <TaskComponent onDelete={handleDelete} key={index} task={item}/>
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
          <NewTaskModal onFormSubmit={handleSubmit}/>
        </Modal>
    </Box>
  );
};

export default TaskList;
