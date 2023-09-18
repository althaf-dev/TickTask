import React, { useContext } from 'react'
import { Appcontext } from '../../Appcontext'
import { CATEGORY } from '../../Utilities/Data';
import { count } from '../../stateLogics';

function FinishedTaskCount() {
    const {stateTodos} =  useContext(Appcontext); 
  return (
    <div className=' bg-active  text-white sticky-top p-3 mb-1'>
      <h5 >FINISHED TASKS {count(stateTodos, CATEGORY.FINISH)}</h5>
    </div>
  )
}

export default FinishedTaskCount
