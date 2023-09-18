import React, { useContext } from 'react'
import "./ActiveTasks.css";
import { Appcontext } from '../../Appcontext';
import { allowDrop } from '../../Utilities/dragAndDrop';
import { ACTIVEBLOCKSTYLE } from '../styles';

import Tasks from "../TaskEntry/Tasks";
import { ACTION, CATEGORY } from '../../Utilities/Data';
import ActiveTaskCount from '../TaskCounts/ActiveTaskCount';

function ActiveTasks() {
  const { dispatchTodos} = useContext(Appcontext);
  return (
    <div className={ACTIVEBLOCKSTYLE}
      onDrop={ev => dispatchTodos({
        type: ACTION.DRAG, payload: { ev, categoryBox: CATEGORY.ACTIVE }
      })}
      onDragOver={allowDrop}
    >
      <ActiveTaskCount/>
 
         <Tasks categoryBox={CATEGORY.ACTIVE} />

     
    </div>
  )
}

export default ActiveTasks
