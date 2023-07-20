import React from 'react'

function Filter() {
  return (
    <div>
    <p> Find Task</p> 

    <p>Select Filter</p>
    <label htmlFor="due">Due Date</label>
    <input className='ms-2' type="radio" name="Due" id="due"  value={"due"}/>
    <label className='ms-2' htmlFor="due">Start Date</label>
    <input className='ms-2' type="radio" name="Due" id="start"  value={"due"}/>
    <label  className='ms-2' htmlFor="due">Assignee</label>
    <input className='ms-2' type="radio" name="Due" id="assign"  value={"due"}/>
       
    </div>
  )
}

export default Filter
