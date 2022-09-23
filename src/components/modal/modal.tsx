import React from 'react';
import './styles.css';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import AddNewTaskForm, {Values} from "../add-new-task-form/add-new-task-form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
);

type NewTaskModalPropsType = {
  onFormSubmit: (values: Values) => void;
}

const NewTaskModal = React.forwardRef(({onFormSubmit}: NewTaskModalPropsType, ref) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div className="modal__wrapper">
        <h2 id="simple-modal-title">Add new task</h2>
        <AddNewTaskForm onFormSubmit={onFormSubmit}/>
      </div>
    </div>
  );
});

export default NewTaskModal;
