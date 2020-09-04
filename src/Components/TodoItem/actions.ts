import { SingleTodo } from './../mainTypes';

export const updateTodos = (todosUpdated: SingleTodo[]) => {
    return({
        type: 'UPDATE_TODOS',
        value: todosUpdated,
    })
}

export const deleteTodoItem = (removedTodo: SingleTodo) => {
    return ({
        type: 'DELETE_TODO_ITEM',
        value: removedTodo,
    })
}