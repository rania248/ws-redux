import React from "react";
import EditTodo from "./EditTodo";
import { useDispatch } from "react-redux";
import { completeTodo } from "../../actions";

const Todo = ({ task }) => {
  const dispatch = useDispatch();
  const completeHandler = () => {
    dispatch(completeTodo({ id: task.id }));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${task.completed ? "completed" : ""}`}>
        {task.text}
      </li>

      <div className="btn-container">
        <button
          className={`${task.completed ? "notdone-btn" : "done-btn"}`}
          onClick={completeHandler}
        >
          {`${task.completed ? "Not Done" : "Done"}`}
        </button>
 
        <EditTodo task={task} />
      </div>
    </div>
  );
};
export default Todo;
