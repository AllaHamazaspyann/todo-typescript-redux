import { SingleTodo } from './../mainTypes';

export const getListFromStorage = () => {
    return ({
        type: 'GET_TODO_LIST_FROM_STORAGE',
        value: localStorage.getItem('todoList') && JSON.parse(localStorage.getItem('todoList') || '[]'),
    })
}

export const updateSectionStatus = (todoList: SingleTodo[], singleTodo: SingleTodo, sectionStatus: string) => {
    const todosUpdated = todoList.map((todo: SingleTodo) => {
        if(todo === singleTodo){
          return {...todo, section: sectionStatus }
        }
        return todo
      });
      console.log('todosUpdated', todosUpdated);
    return ({
        type: 'UPDATE_SECTION_STATUS',
        value: sectionStatus,    
        singleTodo,
        todosUpdated: todosUpdated
    })
}