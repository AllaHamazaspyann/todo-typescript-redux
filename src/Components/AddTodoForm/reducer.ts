import { SingleTodo } from './../mainTypes';

interface AddTodoStateType {
  todoList: any
}

const initialState = {
  todoList: []
}

type Action = {
  type: string,
  value: any,
  singleTodo: SingleTodo,
  sectionStatus: string,
  todoList: SingleTodo[],
  todosUpdated: SingleTodo[]
}

export const AddTodoState = (state: AddTodoStateType = initialState, action: Action) => {
  switch (action.type) {
    case 'GET_TODO_LIST_FROM_STORAGE': {
      return {
        ...state,
        todoList: action.value,
      }
    }
    case 'ADD_TODO': {
      localStorage.setItem('todoList', JSON.stringify([...state.todoList, action.value]));
      return {
        ...state,
        todoList: [...state.todoList, action.value]
      }
    }
    case 'UPDATE_EXISTING_TODOS': {
      return {
        ...state,
        todoList: action.value
      }
    }
    case 'DELETE_TODO_ITEM': {
      return {
        ...state,
        todoList: state.todoList.filter((todo: SingleTodo) => todo !== action.value),
      }
    }
    case 'UPDATE_SECTION_STATUS': {
      return {
        ...state,
        todoList: action.todosUpdated
      }
    }
    default: {
      return state
    }
  }
}
