import React from 'react';
import {useDispatch} from 'react-redux';
import ColorPickerField from 'material-ui-color-picker';
import {Formik, FormikHelpers, Form, Field} from 'formik';
import {newTaskAdded} from "../../store/actions";
import Button from '@material-ui/core/Button';

interface Values {
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
        title: '',
        uniqueName: '',
        picked: '',
        color: ''
      }}
      onSubmit={(
        values: Values,
        {setSubmitting}: FormikHelpers<Values>
      ) => {
        console.log(values)
        dispatch(newTaskAdded({
            title: values.title,
            uniqueName: values.uniqueName,
            picked: values.picked,
            color: values.color
          }
        ));
        setSubmitting(true)
      }}
    >
      {({values}) => (
        <Form>
          <div className="field-group">
            <label htmlFor="title">Task Title</label>
            <Field
              id="title"
              name="title"
              placeholder="...Add what you want to do"/>
          </div>
          <div className="field-group">
            <label htmlFor="uniqueName">Unique Name</label>
            <Field
              id="uniqueName"
              name="uniqueName"
              placeholder="Add special name"/>
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
