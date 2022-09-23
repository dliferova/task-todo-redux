import React, {useEffect, useState} from 'react';
import {Field} from "formik";

interface Types {
  type: string,
  id: string,
  attributes: {
    title: string
  }
}

const ControlledSelect = () => {
  const [types, setTypes] = useState<Types[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('test_01/types.json')
      .then((response) => {
        response.json().then(json => {
          const copy = [...json.data]
          setTypes(copy)
          setLoading(false);
        })
      })
      .catch(() => console.log('Error in fetching'))
  }, []);


  return (
    <Field
      as="select"
      id="selectedType"
      name="selectedType"
      disabled={isLoading}
    >
      <option disabled selected value={""}> -- select an option --</option>
      {types.map(item =>
        <option key={item.id} value={item.attributes.title}>{item.attributes.title}</option>
      )}
    </Field>
  );
}

export default ControlledSelect;
