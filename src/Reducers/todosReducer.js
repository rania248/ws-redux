import { ADD_TODO, COMPLETE_TODO, EDIT_TODO } from "../action-types";

const initialState = {
  todos: [],
};

function todosReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Math.floor(Math.random() * 1000),
            text: payload,
            completed: false,
          },
        ],
      };

    case COMPLETE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case EDIT_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? payload : todo
        ),
      };

    default:
      return state;
  }
}
export default todosReducer;
