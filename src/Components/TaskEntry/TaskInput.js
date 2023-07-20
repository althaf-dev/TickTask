import React from 'react'

function TaskInput(props) {
  return (
    <input
          type=" text"
          placeholder="Your Task here"
          onChange={(e) => {
            props.props.setTodo(e.target.value);
          }} className='p-3 rounded-3'
        />
  )
}

export default TaskInput
