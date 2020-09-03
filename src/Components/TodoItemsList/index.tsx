import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { RootState } from 'typesafe-actions';
import { useSelector, useDispatch } from 'react-redux';

import { getListFromStorage } from './actions';
import * as styles from '../styles.css';

import TodoItem from '../TodoItem';

import { statusUpdate } from '../../helpers';

import { SingleTodo, SectionStatus } from '../mainTypes';

import { updateSectionStatus } from './actions';

const TodoItemsList: React.FC = () => {
  const todoListState = useSelector((state: RootState) => state.AddTodoState);
  const { todoList }  = todoListState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListFromStorage());
    // const interval = setInterval(() => statusUpdate(singleTodo.date), 1000);
    // return () => clearInterval(interval);
    
  }, []);

  useEffect(() => {
    todoList.map((singleTodo: SingleTodo) => {
      console.log('dasas');
      const interval = setInterval(() => dispatch(updateSectionStatus(todoList, singleTodo, statusUpdate(singleTodo.date))), 1000);
      return () => clearInterval(interval);
    })
  }, [])
  

  const getToDos = (section: string) => {
    return todoList.filter((todo: SingleTodo) => todo.section === section)
  }

  return (
      <Grid container justify='space-around' alignItems='flex-start' style={styles.container}>
        <Grid item xs={3}><Box color="secondary.main" style={styles.sectionHeader}>Active</Box>
          <ul style={styles.ul}>
            {getToDos(SectionStatus.active).map((activeItem: any) => (
              <li key={activeItem.text}><TodoItem singleTodo={activeItem}/></li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={3}><Box color="secondary.main" style={styles.sectionHeader}>Expired</Box>
          <ul style={styles.ul}>
          {getToDos(SectionStatus.expired).map((expiredItem: any) => (
              <li key={expiredItem.text}>
                <TodoItem singleTodo={expiredItem}/>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={3}><Box color="secondary.main" style={styles.sectionHeader}>Completed</Box>
          <ul style={styles.ul}>
          {getToDos(SectionStatus.completed).map((completedItem: any) => (
              <li key={completedItem.text}>
                <TodoItem singleTodo={completedItem}/>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
  )
}

export default TodoItemsList;