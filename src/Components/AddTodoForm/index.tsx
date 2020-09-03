import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

import { useDispatch } from 'react-redux';

import { addTodo } from './actions';

import { statusUpdate } from '../../helpers';

 const AddTodoForm: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString());
  
  const dispatch =  useDispatch();
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  }
  const handleDateChange = (date: any) => {
    setSelectedDate(date as string);
  };

  const addTodoItem = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    newTodo.trim() !== "" && dispatch(addTodo({text: newTodo, date: selectedDate, complete: false, section: statusUpdate(selectedDate)}));
    //TODO
    // setNewTodo("")
  } 
  
  return (
      <form>
        <Grid container justify='space-around' alignItems="center">
          <TextField 
            type="text" 
            InputLabelProps={{ shrink: true, }} 
            label="Enter todo text" 
            onChange={handleChange}
            />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Due date"
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              onChange={handleDateChange}
              value={selectedDate}
            />
          </MuiPickersUtilsProvider>
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            onClick={addTodoItem}>
              Add todo
          </Button>
        </Grid>
      </form>
  )
}

export default AddTodoForm;