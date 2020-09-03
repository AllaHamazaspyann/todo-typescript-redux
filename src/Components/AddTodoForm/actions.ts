import { SingleTodo } from '../mainTypes';

export const addTodo = (payload: SingleTodo) => {
    return({
        type: 'ADD_TODO',
        value: payload,
    })
}   


