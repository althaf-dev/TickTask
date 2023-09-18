import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ReactLoading from "react-loading"
function UserCreated() {
    const [loading, setloading] = useState(false);
    setTimeout(() => {
        setloading(true);
    }, 2000);
    return (
        <div className='container-fluid text-success mt-5'>

            <div className="row">
                <div className="col-4 offset-4">
                     {loading && <div><h1>USER CREATED SUCCESSFULLY</h1>
                    <Link to={'/login'}>Go to Login</Link></div>} 
                    {!loading && <div className='ms-5 d-flex justify-content-center align-items-center p-5'><ReactLoading type="spin" color="#0000FF"
                    height={200} width={100} /></div>}
                </div>
               
               
            </div>



        </div>
    )
}

export default UserCreated
