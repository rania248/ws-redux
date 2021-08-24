import {
    ADD_TODO,
    COMPLETE_TODO,
    EDIT_TODO,
    // ACHIEVED_TODOS,
    // UNACHIEVED_TODOS,
} from "../Constants/action-types";

const initialState = {
    todos: [],
};
function todosReducers(state = initialState, action) {
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
            break;
        case COMPLETE_TODO:
            return {
                todos: state.todos.map((todo) =>
                    todo.id === payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
            break;

        case EDIT_TODO:
            return {
                todos: state.todos.map((todo) =>
                    todo.id === payload.id ? payload : todo
                ),
            };
            break;

        // case ACHIEVED_TODOS:
        //     return {
        //         todos: state.todos.filter((todo) => todo.completed === true),
        //     };
        //     break;
        // case UNACHIEVED_TODOS:
        //     return {
        //         todos: state.todos.filter((todo) => todo.completed === false),
        //     };
        default:
            return state;
            break;
    }
}
export default todosReducers;