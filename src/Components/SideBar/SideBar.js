import React from 'react'
import TaskEntry from '../TaskEntry/TaskEntry'
import { Filter } from '../Header/Header'

function SideBar() {
  return (
    <div className='col-lg-2 col-12 ms-2 bg-white '>
      MENU
      <TaskEntry/>
      <Filter/>
    </div>
  )
}

export default SideBar
