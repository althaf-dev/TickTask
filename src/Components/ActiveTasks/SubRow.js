import React from 'react'
import randomColor from 'randomcolor'
function SubRow(props) {


  return (
    <div className='row subrow '>
        <div className="col-3">
            <p>{props.props.tdo.DueDate?props.props.tdo.DueDate.toDateString():null}</p>
        </div>
        <div className="col-3">
          <p>{props.props.tdo.tags?props.props.tdo.tags.map((tag)=><i className='me-2  rounded-top-right-1 rounded-bottom-right-1 pe-2 p-1'style={{backgroundColor:randomColor()}}>{tag}</i>):null}</p>
        </div>
      
    </div>
  )
}

export default SubRow
