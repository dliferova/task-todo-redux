import React from 'react';
import ColorPickerField from 'material-ui-color-picker';
import {Formik, FormikHelpers, Form, Field} from 'formik';
import Button from '@material-ui/core/Button';
import ControlledSelect from "../../ui/select/select";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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
            <label htmlFor="title" className={classes.label}>Task Title</label>
            <Field
              id="title"
              name="title"
              placeholder="Add what you want to do"
              className={classes.input}
            />
          </div>
          <div className="field-group">
            <label htmlFor="uniqueName" className={classes.label}>Unique Name</label>
            <Field
              id="uniqueName"
              name="uniqueName"
              placeholder="Add special name"
              className={classes.input}
            />
          </div>
          <div className="field-group">
            <p>Task types</p>
            <ControlledSelect />
          </div>
          <div className="field-group">
            <label htmlFor="description" className={classes.label}>Description</label>
            <Field
              name="description"
              as="textarea"
              placeholder="Add some description"
              className={classes.input}
            />
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
