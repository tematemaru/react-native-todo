import { ADD_TODO } from '../constants/types';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
}

export default todoReducer;