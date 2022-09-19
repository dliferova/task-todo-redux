import React from 'react';
import {useDispatch} from 'react-redux';
import ColorPickerField from 'material-ui-color-picker';
import { nanoid } from 'nanoid'
import {Formik, FormikHelpers, Form, Field} from 'formik';
import {newTaskAdded} from "../../store/actions";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface Values {
  id: string,
  title: string,
  uniqueName: string,
  picked: string,
  color: string
}

const AddNewTaskForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        id: nanoid(),
        title: '',
        uniqueName: '',
        picked: '',
        color: ''
      }}
      onSubmit={(
        values: Values,
        {setSubmitting}: FormikHelpers<Values>
      ) => {
        dispatch(newTaskAdded(values));
        setSubmitting(true)
      }}
    >
      {({values}) => (
        <Form>
          <div className="field-group">
            <label htmlFor="title">Task Title</label>
            <TextField id="title" name="title" placeholder="...Add what you want to do"/>
          </div>
          <div className="field-group">
            <label htmlFor="uniqueName">Unique Name</label>
            <TextField id="uniqueName" name="uniqueName" placeholder="Add special name"/>
          </div>
          <div className="field-group" id="radio-group">
            <p>Task types</p>
            <ul className="types-list" role="group" aria-labelledby="radio-group">
              <li>
                <label>
                  <Field type="radio" name="picked" value="type-personal"/>
                  Personal task
                </label>
              </li>
              <li>
                <label>
                  <Field type="radio" name="picked" value="type-marketing"/>
                  Marketing task
                </label>
              </li>
              <li>
                <label>
                  <Field type="radio" name="picked" value="type-sales"/>
                  Sales task
                </label>
              </li>
              <li>
                <label>
                  <Field type="radio" name="picked" value="type-development"/>
                  Development task
                </label>
              </li>
              <li>
                <label>
                  <Field type="radio" name="picked" value="type-hr"/>
                  HR task
                </label>
              </li>
            </ul>
          </div>
          <div className="field-group">
            <label htmlFor="color">Change color</label>
            <Field
              id="color"
              name="color"
              component={ColorPickerField}
            />
          </div>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewTaskForm;
