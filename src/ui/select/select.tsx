import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    inputLabel: {
      color: '#fff'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      outline: '1px solid #fff',
      color: '#fff',
      minWidth: '250px',
    },
  }),
);


const ControlledSelect = () => {
  const classes = useStyles();
  const [type, setType] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Type</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={type}
          onChange={handleChange}
          label="type"
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Personal</MenuItem>
          <MenuItem value={20}>Marketing</MenuItem>
          <MenuItem value={30}>Hr</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ControlledSelect;
