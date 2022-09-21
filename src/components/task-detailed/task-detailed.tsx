import React from 'react';
import {Formik, FormikHelpers, Form, Field} from 'formik';
import './styles.css';
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Task} from "../../types/task";
import NewTaskModal from "../modal/modal";
import Modal from "@material-ui/core/Modal";
import ControlledSelect from "../../ui/select/select";
import {Values} from "../add-new-task-form/add-new-task-form";
import {newSubtaskAdded} from "../../store/actions";
import ColorPickerField from "material-ui-color-picker";

type TaskDetailedProps = {
  task: Task,
}

const TaskDetailed = ({task}: TaskDetailedProps) => {
  const dispatch = useDispatch();

  const handleSubmit = (values: Values) => {
    dispatch(newSubtaskAdded({
      title: values.title,
      uniqueName: values.uniqueName,
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
        <Formik
          initialValues={{
            title: task.title,
            uniqueName: task.uniqueName,
            selectedType: task.type,
            color: ''
          }}
          onSubmit={(
            values: Values,
            {setSubmitting}: FormikHelpers<Values>
          ) => {
            setSubmitting(false)
          }}
        >
          {({values}) => (
            <Form>
              <div className="field-group">
                <label htmlFor="title">{task.title}</label>
                <Field
                  id="title"
                  name="title"
                  placeholder="...Add what you want to do"/>
              </div>
              <div className="field-group">
                <label htmlFor="uniqueName">{task.uniqueName}</label>
                <Field
                  id="uniqueName"
                  name="uniqueName"
                  placeholder="Add special name"/>
              </div>
              <div className="field-group">
                <p>Task types</p>
                <ControlledSelect/>
              </div>
              <div className="field-group">
                <label htmlFor="color">Change color</label>
                <Field
                  id="color"
                  name="color"
                  component={ColorPickerField}
                />
              </div>
            </Form>
          )}
        </Formik>
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



