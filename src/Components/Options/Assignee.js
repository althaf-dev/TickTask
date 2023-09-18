import React, { useContext, useEffect, useRef } from 'react'
import { FaUser,FaPlus } from 'react-icons/fa6'
import { Appcontext } from '../../Appcontext'
import CreatableSelect from 'react-select/creatable';
import { ACTION, styles } from '../../Utilities/Data';
function Assignee(props) {
   const  {editMode,SetEditMode,SetTagAdd} = useContext(Appcontext);
   
  return (
    <div className="col-5 mt-1" 
      onClick={() => {
      SetEditMode(true);
      SetTagAdd(false);
    }}>
      {!editMode && <div className="edit-icon-hover">
          <FaUser />
          <FaPlus />
      </div>}
      </div>
  )
}
export function AssigneeSelect(props){

    const { editMode,SetEditMode, user, dispatchUser, dispatchTodos } = useContext(Appcontext);
    const  AssigneeRef = useRef(null);

    useEffect(()=>{
      if(AssigneeRef.current)
      AssigneeRef.current.focus();
    })
  return (<>
    {editMode && <CreatableSelect
      ref={AssigneeRef}
      className="mt-2  show" 
      placeholder="Select Assignee"
      value={props.tdo.user}
      onChange={value => {
        
        console.log({label:value.label,value:value.value});
        dispatchTodos({ type: ACTION.SETASSIGNEE, payload: { id: props.tdo.id, val: {label:value.label,value:value.value} } });
        dispatchUser({ type: ACTION.ADDASSIGNEE, payload: value })
      }}
      options={user} onBlur={() => SetEditMode(false)} styles={styles} />}
  </>
  )
}
export default Assignee
