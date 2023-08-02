import React ,{useContext,useEffect, useRef}from 'react'
import { Appcontext } from '../../Appcontext';
import patch from '../patch';
function TaskEdit(props) {

  const {setTodos,todos,todo,setTodo} = useContext(Appcontext);
  const inputRef = useRef(null)

  useEffect(() => {
  
    if (inputRef.current ) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, []);
  return (
    <div className='d-flex  flex-row justify-content-evenly align-items-center'>
       <input
        ref={inputRef}
        type=" text"
        value={todo?todo:props.tdo.item}
        placeholder="Your Task here"
        onChange={(e) => {
           setTodo(e.target.value);
        }}
        className='form-control mb-2 mt-1'
        onBlur={(e)=>{
          setTodo(e.target.value);
        setTodos(todos.map((el)=>{
            if(props.tdo.id === el.id){
              el.item = e.target.value;
              el.edit = false;
              patch(el,el.id);
            }
            return el;
          }));
       setTodo(null);
       }}
      />
    </div>
  )
}

export default TaskEdit
