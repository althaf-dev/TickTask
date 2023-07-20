import React from "react";

function TaskAdd(props) {

  return (
    <button className="rounded-3">
      <i
        className="fa-solid fa-plus"
        onClick={() => {
          props.props.setTodos([
            ...props.props.todos,
            {
              id: Date.now(),
              item: props.props.todo,
              status: false,
              deleted: false,
            },
          ]);
        }}
      ></i>
    </button>
  );
}

export default TaskAdd;
