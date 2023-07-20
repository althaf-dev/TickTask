import React from "react";
import TaskAdd from "./TaskAdd";
import TaskInput from "./TaskInput";

function TaskEntry(props) {
  return (
    <div className="d-flex justify-content-center">
      <TaskInput props={{ setTodo: props.props.setTodo }} />
      <TaskAdd props={{ todos: [...props.props.todos], setTodos: props.props.setTodos, todo: props.props.todo }} />
    </div>);
}

export default TaskEntry;
