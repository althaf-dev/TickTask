import React, { useContext } from 'react'
import { Appcontext } from '../../Appcontext';
import { FINISHBLOCKSTYLE } from '../styles';
import { allowDrop } from '../../Utilities/dragAndDrop';
import Tasks from '../TaskEntry/Tasks';
import { ACTION, CATEGORY } from '../../Utilities/Data';
import FinishedTaskCount from '../TaskCounts/FinishedTaskCount';

function FinishedTasks() {
  const { dispatchTodos } = useContext(Appcontext);
  return (
    <div className={FINISHBLOCKSTYLE}
      onDrop={ev => dispatchTodos({ type: ACTION.DRAG, payload: { ev, categoryBox: CATEGORY.FINISH} })}
      onDragOver={allowDrop}>
      <FinishedTaskCount/>
      <Tasks categoryBox={CATEGORY.FINISH} />
    </div>
  )
}

export default FinishedTasks
