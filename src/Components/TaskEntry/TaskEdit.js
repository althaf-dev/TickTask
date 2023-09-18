import React ,{useContext,useEffect, useRef}from 'react'
import { Appcontext } from '../../Appcontext';
import { ACTION } from '../../Utilities/Data';

function TaskEdit(props) {

  const {dispatchTodos,stateTodo,dispatchTodo} = useContext(Appcontext);
  const inputRef = useRef(null)
  useEffect(() => {
  
    if (inputRef.current ) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, []);

  useEffect(()=>{

    dispatchTodo({type:"add",payload:props.tdo.item})
  },[props.tdo.item,dispatchTodo])
  return (
    <div className='d-flex  flex-row justify-content-evenly align-items-center'>
       <input
        ref={inputRef}
        type=" text"
        value={stateTodo?stateTodo.todo:props.tdo.item}
        placeholder="Your Task here"
        onChange={(e) => {
          dispatchTodo({type:"add",payload:e.target.value})
        }}
        className='form-control mb-2 mt-1'
        onBlur={e=>{
          dispatchTodos({type:ACTION.EDIT,payload:{id:props.tdo.id,val:e.target.value}})
       }}
      />
    </div>
  )
}

export default TaskEdit
