import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { differenceInDays } from 'date-fns';
import { RootState } from 'typesafe-actions';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodos, deleteTodoItem } from './actions';
import * as Styles from '../styles.css';
import {
  SingleTodo,
  ToggleTodos,
  SectionStatus
} from '../mainTypes';
import { statusUpdate } from '../../helpers';

interface TodoListItemProps {
  singleTodo: SingleTodo;
}

const TodoItem: React.FC<TodoListItemProps> = ({ singleTodo }) => {
  const [diffinDays, setDiffinDays] = useState<number>();
  const todoListState = useSelector((state: RootState) => state.AddTodoState);

  useEffect(() => {
    timeRemaining();
  }, []);

  const dispatch = useDispatch();

  const { todoList } = todoListState;

  const timeRemaining = () => {
    const todoDate = Date.parse(singleTodo.date),
          today = new Date();
    const differenceInTodoDays = differenceInDays(todoDate, today);
    setDiffinDays(differenceInTodoDays + 1);
  }

  const toggleTodo: ToggleTodos = () => {
    const newTodos = todoList.map((todo: any) => {
      if (todo === singleTodo) {
        return {
          ...todo,
          complete: !todo.complete,
          section: !todo.complete ? SectionStatus.completed : SectionStatus.active
        }
      }
      return todo;
    });
    dispatch(updateTodos(newTodos))
  }

  const deleteSingleTodo = () => {
    dispatch(deleteTodoItem(singleTodo))
  }

  return (
    <li style={singleTodo.section === SectionStatus.expired ? { color: 'grey' } : undefined}>
      <label style={Styles.sectionHeader}>
        {singleTodo.text}
      </label>
      <Checkbox
        color="primary"
        checked={singleTodo.complete}
        inputProps={{ 'aria-label': singleTodo.text }}
        onChange={toggleTodo}
        disabled={singleTodo.section === SectionStatus.expired} />
        <Typography display="block">
          <Box color="primary.main" display="inline-block">Remaining Time</Box>
        </Typography>
        <Box>{diffinDays} days</Box>
      <Grid item xs={8} style={Styles.deleteIcon} alignItems="center">
        <Button variant="outlined" color="secondary" onClick={deleteSingleTodo}>
          Delete Todo
        </Button>
      </Grid>
    </li>
  )
}


export default TodoItem;