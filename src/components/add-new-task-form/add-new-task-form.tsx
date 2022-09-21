import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import ColorPickerField from 'material-ui-color-picker';
import {Formik, FormikHelpers, Form, Field} from 'formik';
import {newTaskAdded} from "../../store/actions";
import Button from '@material-ui/core/Button';
import ControlledSelect from "../../ui/select/select";
import types from "../../data";
import MenuItem from "@material-ui/core/MenuItem";

export interface Values {
  title: string,
  uniqueName: string,
  selectedType: string,
  color: string
}

type AddNewTaskFormPropsType = {
  onFormSubmit: (values: Values) => void;
}

const AddNewTaskForm = ({onFormSubmit}: AddNewTaskFormPropsType) => {

  return (
    <Formik
      initialValues={{
        title: '',
        uniqueName: '',
        selectedType: '',
        color: ''
      }}
      onSubmit={(
        values: Values,
        {setSubmitting}: FormikHelpers<Values>
      ) => {
        onFormSubmit(values)
        setSubmitting(false)
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
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewTaskForm;
