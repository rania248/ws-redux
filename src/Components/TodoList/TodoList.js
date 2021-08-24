import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

const TodosList = ({ complete }) => {
    //States
    const todos = useSelector((state) => state.todosReducer.todos);
    const [filteredTodos, setFilteredTodos] = useState([]);
    // Functions

    useEffect(() => {
        filterTodos();
    }, [filteredTodos]);

    const filterTodos = () => {
        switch (complete) {
            case "achieved":
                setFilteredTodos(
                    todos.filter((task) => task.completed === true)
                );

                break;
            case "unachieved":
                setFilteredTodos(
                    todos.filter((task) => task.completed === false)
                );

                break;

            default:
                setFilteredTodos(todos);
                break;
        }
    };
    // console.log(filteredTodos);

    return (
        <div className="container">
            <ul className="todo_list">
                {filteredTodos.map((task, i) => (
                    <Todo task={task} key={task.id} />
                ))}
            </ul>
        </div>
    );
};

export default TodosList;