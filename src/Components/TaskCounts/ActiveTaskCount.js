import React, { useContext } from 'react'
import { Appcontext } from '../../Appcontext'
import { CATEGORY } from '../../Utilities/Data';
import { count } from '../../stateLogics';

export default function ActiveTaskCount() {

  const {stateTodos} =  useContext(Appcontext);
  return (
    <div className=' bg-active text-white sticky-top p-2'>
       <h5 >
        ACTIVE TASKS {count(stateTodos, CATEGORY.ACTIVE)}</h5> 
    </div>
  )
}
