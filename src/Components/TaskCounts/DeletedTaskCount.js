import React, { useContext } from 'react'
import { Appcontext } from '../../Appcontext'
import { CATEGORY } from '../../Utilities/Data';
import { count } from '../../stateLogics';

function DeletedTaskCount() {
   const {stateTodos} =  useContext(Appcontext);
  return (
    <div className=' bg-active text-white sticky-top p-2'>
       <h5>DELETED TASKS {count(stateTodos, CATEGORY.DELETE)}</h5>
    </div>
  )
}

export default DeletedTaskCount
