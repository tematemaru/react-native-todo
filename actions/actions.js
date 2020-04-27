import { ADD_TODO } from '../constants/types';

export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload,
  }
}