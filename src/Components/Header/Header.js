import React from 'react'
import TaskEntry from "../TaskEntry/TaskEntry";
import "./Header.css";
import FIlterBar from '../Filter/FIlterBar'
function Title(props){
  

  return(

    <div className="col-4 text-dark p-4 border border-2 bg-dark bg-gradient text-white mt-3">
        <h1>TO DO APP</h1>
        <p>hey! Today is {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]}</p>
        {props.loading && <p className='bg-primary bg-gradient text-white p-1 rounded-1'>Loading Items....</p>}
        {props.error && <p className='text-white border border-danger bg-danger bg-gradient p-1 rounded-1 '><i class="fa-solid fa-triangle-exclamation ms-2 me-4"></i>{props.error}</p>}
    </div>
  )
}
function Filter() {
  return (
    <div className="col-4 bg-dark bg-gradient  mt-3 mb-0  border border-2 rounded-2">
    <FIlterBar/>
    </div>
  )
}
function Header(props) {

  return (

    <div className="row bg-light  pb-2">

      <Title  error ={props.error} loading ={props.loading}/>
      <TaskEntry />
      <Filter />

    </div>
  )
}

export default Header
