import React,{useContext} from 'react'
import { Appcontext } from '../../../Appcontext';
function AlertBar() {

  const {search} = useContext(Appcontext);
  return (
    <div className='row text-primary mb-2 mt-2'>
      <div className="col-4 d-flex justify-content-end p-0 m-0">
        {search && <h3>Searching for </h3>}
      </div>
      <div className="col-3 p-0 ms-2 d-flex justify-content-start ">
        {search &&  <h3>"{search}"</h3>}
      </div>
      
    </div>
  )
}

export default AlertBar
