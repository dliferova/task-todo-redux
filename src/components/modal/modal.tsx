import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import AddNewTaskForm from "../add-new-task-form/add-new-task-form";

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

const NewTaskModal = React.forwardRef(() => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Add new task</h2>
      <AddNewTaskForm />
    </div>
  );
});

export default NewTaskModal;
