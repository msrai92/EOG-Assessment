import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  FormControl,
  MenuItem,
  Select,
  Chip,
  InputLabel,
  InputBase,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import '../Metrics/metric.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    paddingRight: 20,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectDropDown = (props) => {
  const {
    handleChange,
    handleDelete,
    metricTypes,
    metricSelected,
  } = props;
  const classes = useStyles();
  return (
    <div className="dropdown-container">
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="select-metric-label">Select Metric...</InputLabel>
        <Select
          labelId="select-metric"
          id="select-metric-dropdown"
          multiple
          value={metricSelected}
          onChange={handleChange}
          input={<BootstrapInput />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  className={classes.chip}
                  deleteIcon={
                    (
                      <CancelIcon
                        onMouseDown={(e) => e.stopPropagation()}
                      />
                    )
                  }
                  onDelete={(e) => handleDelete(e, value)}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {metricTypes.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectDropDown;
