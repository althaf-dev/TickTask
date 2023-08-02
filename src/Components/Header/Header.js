import React from 'react'
import "./Header.css";
import FIlterBar from '../Filter/FIlterBar'
function Title(props){
  

  return(

    <div className="col-4  d-flex justify-content-evenly align-items-center text-white pt-1">
        <h5>TO DO APP</h5>
        <p>hey! Today is {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]}</p>
        {props.loading && <p className='bg-primary bg-gradient text-white mt-1 p-1 rounded-1'>Loading Items....</p>}
        {props.error && <p className='text-white border border-danger bg-danger bg-gradient p-1 rounded-1 '><i class="fa-solid fa-triangle-exclamation ms-2 me-4"></i>{props.error}</p>}
    </div>
  )
}
export function Filter() {
  return (
    <div className="text-dark mt-1 mb-0 ">
    <FIlterBar/>
    </div>
  )
}
function Header(props) {

  return (

    <div className="row bg-header ">

      <Title  error ={props.error} loading ={props.loading}/>
      

    </div>
  )
}

export default Header
