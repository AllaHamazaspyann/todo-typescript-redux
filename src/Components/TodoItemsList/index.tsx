import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { RootState } from 'typesafe-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getListFromStorage, updateSectionStatus } from './actions';
import * as styles from '../styles.css';
import TodoItem from '../TodoItem';
import { SingleTodo, SectionStatus } from '../mainTypes';
import { statusUpdate } from '../../helpers';


const TodoItemsList: React.FC = () => {
  const todoListState = useSelector((state: RootState) => state.AddTodoState);
  const { todoList }  = todoListState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListFromStorage());
    todoList.map((singleTodo: SingleTodo) => {
      const interval = setInterval(() => dispatch(updateSectionStatus(todoList, singleTodo, statusUpdate(singleTodo.date))), 1000);
      return () => clearInterval(interval);
    })
  }, []);

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