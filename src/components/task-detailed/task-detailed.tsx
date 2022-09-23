import React, {useEffect, useRef} from 'react';
import './styles.css';
import {useDispatch} from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {Task} from "../../types/task";
import NewTaskModal from "../modal/modal";
import Modal from "@material-ui/core/Modal";
import {newSubtaskAdded, taskUpdated} from "../../store/actions";
import {Formik, Field, Form, FormikHelpers, useFormikContext} from 'formik';
import * as Yup from 'yup';
import ControlledSelect from "../../ui/select/select";
import {Values} from "../add-new-task-form/add-new-task-form";

interface FormValues {
  title: string,
  uniqueName: string,
  selectedType: string,
}

type TaskDetailedProps = {
  task: Task,
}

type AutoUpdateProps = {
  taskId: string
}

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Title required'),
  uniqueName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Unique name required'),
  selectedType: Yup.string().required('Required'),
});

const ValidateField = (value: any) => {
  let error;
  if (value === '') {
    error = 'Should have value';
  }
}

const AutoUpdate = ({taskId}: AutoUpdateProps) => {
  const dispatch = useDispatch();

  const {values, submitForm} = useFormikContext<FormValues>();

  React.useEffect(() => {
    dispatch(taskUpdated(taskId, values.title, values.uniqueName, values.selectedType))
  }, [values, submitForm]);

  return null;
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
        <Formik
          enableReinitialize={true}
          initialValues={{
            title: task.title,
            uniqueName: task.uniqueName,
            selectedType: task.type,
          }}
          validationSchema={SignupSchema}
          onSubmit={() => {}}
        >
          {({ errors, touched, isValidating }) => (
            <Form>
              <ul className="detailed-task__param-list">
                <li>
                  <label htmlFor="title" className="detailed-task__category">Task title</label>
                  <Field id="title" name="title" className="detailed-task__value" validate={ValidateField}/>
                  {errors.title && touched.title ? (
                    <div className="field-error">{errors.title}</div>
                  ) : null}
                </li>
                <li>
                  <label htmlFor="uniqueName" className="detailed-task__category">Unique Name</label>
                  <Field id="uniqueName" name="uniqueName" className="detailed-task__value" validate={ValidateField}/>
                  {errors.uniqueName && touched.uniqueName ? (
                    <div className="field-error">{errors.uniqueName}</div>
                  ) : null}
                </li>
                <li>
                  <label htmlFor="selectedType" className="detailed-task__category">Type</label>
                  <ControlledSelect/>
                  {errors.selectedType && touched.selectedType ? (
                    <div className="field-error">{errors.selectedType}</div>
                  ) : null}
                </li>
                <li>
                  <p className="detailed-task__category detailed-task__category_not-changed">Description</p>
                  <p>{task.description}</p>
                </li>
              </ul>
              <AutoUpdate taskId={task.id}/>
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



