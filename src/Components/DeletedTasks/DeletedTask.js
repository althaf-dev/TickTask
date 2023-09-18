import React, { useContext } from 'react'
import { Appcontext } from '../../Appcontext';
import { allowDrop } from '../../Utilities/dragAndDrop';
import { DELETEBLOCKSTYLE } from '../styles';
import Tasks from '../TaskEntry/Tasks';
import { ACTION, CATEGORY } from '../../Utilities/Data';
import DeletedTaskCount from '../TaskCounts/DeletedTaskCount';

function DeletedTask() {
  const { dispatchTodos} = useContext(Appcontext);
  return (
    <div className={DELETEBLOCKSTYLE}
      onDrop={ev => dispatchTodos({ type: ACTION.DRAG, payload: {ev, categoryBox: CATEGORY.DELETE } })}
      onDragOver={allowDrop}>
      <DeletedTaskCount/>
      <Tasks categoryBox={CATEGORY.DELETE} />
    </div>
  )
}

export default DeletedTask
