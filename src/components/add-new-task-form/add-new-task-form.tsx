import React from 'react';
import ColorPickerField from 'material-ui-color-picker';
import {Formik, FormikHelpers, Form, Field} from 'formik';
import Button from '@material-ui/core/Button';
import ControlledSelect from "../../ui/select/select";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import * as Yup from "yup";

export interface Values {
  title: string,
  uniqueName: string,
  selectedType: string,
  description: string,
  color: string
}

type AddNewTaskFormPropsType = {
  onFormSubmit: (values: Values) => void;
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
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  selectedType: Yup.string().required('Please choose type'),
});

const ValidateField = (value: any) => {
  let error;
  if (value === '') {
    error = 'Should have value';
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      padding: '10px',
      border: '1px solid #3f4158',
      borderRadius: '5px',
      fontSize: '14px',
      fontFamily: 'inherit',
    },
    label: {
      marginBottom: '14px'
    }
  }),
);

const AddNewTaskForm = ({onFormSubmit}: AddNewTaskFormPropsType) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        title: '',
        uniqueName: '',
        selectedType: '',
        description: '',
        color: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(
        values: Values,
        {setSubmitting}: FormikHelpers<Values>
      ) => {
        onFormSubmit(values)
        setSubmitting(false)
      }}
    >
      {({values, errors, touched, isValidating}) => (
        <Form>
          <div className="field-group">
            <label htmlFor="title" className={classes.label}>Task Title</label>
            <Field
              id="title"
              name="title"
              placeholder="Add what you want to do"
              className={classes.input}
            />
            {errors.title && touched.title ? (
              <div className="field-error">{errors.title}</div>
            ) : null}
          </div>
          <div className="field-group">
            <label htmlFor="uniqueName" className={classes.label}>Unique Name</label>
            <Field
              id="uniqueName"
              name="uniqueName"
              placeholder="Add special name"
              className={classes.input}
            />
            {errors.uniqueName && touched.uniqueName ? (
              <div className="field-error">{errors.uniqueName}</div>
            ) : null}
          </div>
          <div className="field-group">
            <p>Task types</p>
            <ControlledSelect/>
            {errors.selectedType && touched.selectedType ? (
              <div className="field-error">{errors.selectedType}</div>
            ) : null}
          </div>
          <div className="field-group">
            <label htmlFor="description" className={classes.label}>Description</label>
            <Field
              name="description"
              as="textarea"
              placeholder="Add some description"
              className={classes.input}
            />
            {errors.description && touched.description ? (
              <div className="field-error">{errors.description}</div>
            ) : null}
          </div>
          <div className="field-group">
            <label htmlFor="color" className={classes.label}>Change color</label>
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
