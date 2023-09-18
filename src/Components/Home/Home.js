import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='container-fluid'>
      
        <div className="row  mt-5">
            <div className="col-4 mt-5">
                <img src="welcome-left.png" alt="logo" width={"350px"}/>
            </div>
            <div className="col-4 mt-5  d-flex flex-column align-items-center justify-content-center text-dark">
                <h1 className='display-1 fw-semibold'> TODO </h1>
                <p className='display-6'>To Do gives you focus, from work to play.</p>
                <Link to={"/login"}><button className='btn btn-primary display-1 p-3 ps-5 pe-5'>GET STARTED</button></Link>
            </div>
            <div className="col-4 mt-2">
                <img src="welcome-right.png" alt="logo" width={"250px"} />
            </div>
        </div>
      
    </div>
  )
}

export default Home
