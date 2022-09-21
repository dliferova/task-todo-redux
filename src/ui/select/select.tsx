import React from 'react';
import types from "../../data";
import {Field} from "formik";

const ControlledSelect = () => {
  return (
    <Field as="select" id="selectedType" name="selectedType">
      <option disabled selected value={""}> -- select an option -- </option>
      {types.map(item =>
        <option key={item.id} value={item.attributes.title}>{item.attributes.title}</option>
      )}
    </Field>
  );
}

export default ControlledSelect;
