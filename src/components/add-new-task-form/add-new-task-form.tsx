import React from 'react';
import * as Yup from 'yup';
import ColorPickerField from 'material-ui-color-picker';
import { Formik, FormikHelpers, FormikProps, FormikErrors, Form, Field } from 'formik';

const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));

interface Values  {
  title: string,
  uniqueName: string,
  picked: string,
  color: string
}

const AddNewTaskForm = () => {
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
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <label htmlFor="title">Task Title</label>
            <Field id="title" name="title" placeholder="...Add what you want to do" />
          </div>
          <div>
            <label htmlFor="uniqueName">Unique Name</label>
            <Field id="uniqueName" name="uniqueName" placeholder="Add special name" />
          </div>
          <div id="radio-group">
            <p>Task types</p>
            <div role="group" aria-labelledby="radio-group">
              <label>
                <Field type="radio" name="picked" value="type-personal" />
                Personal task
              </label>
              <label>
                <Field type="radio" name="picked" value="type-marketing" />
                Marketing task
              </label>
              <label>
                <Field type="radio" name="picked" value="type-sales" />
                Sales task
              </label>
              <label>
                <Field type="radio" name="picked" value="type-development" />
                Development task
              </label>
              <label>
                <Field type="radio" name="picked" value="type-hr" />
                HR task
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="color">Unique Name</label>
            <Field
              id="color"
              name="color"
              component={ColorPickerField}
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}


    </Formik>
  );
};

export default AddNewTaskForm;
