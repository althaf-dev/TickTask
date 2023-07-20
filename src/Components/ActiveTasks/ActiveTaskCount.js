import React, { useContext } from 'react'
import { Appcontext } from '../../Appcontext'

function ActiveTaskCount(props) {
  const {todos} = useContext(Appcontext)
  return (
    <h5>ACTIVE TASKS <span>{(todos.filter((tdo) => (tdo.deleted === false && tdo.status === false))).length}</span></h5>
  )
}

export default ActiveTaskCount
