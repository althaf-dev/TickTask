import React, { useContext } from 'react'
import { Appcontext } from '../../Appcontext'
import { FaUser } from 'react-icons/fa6'
import "./ActiveTasks.css";
function SubRow(props) {
  return (
    <div className='container-fluid subrow'>
      <div className='row  mb-2  d-flex justify-content-evenly align-items-center g-0 m-0 p-0'>
        <div className="col-6  d-flex justify-content-start align-items-center ">
          <i className='ms-1'>  {props.tdo.DueDate ? (props.tdo.DueDate) : null}</i>
        </div>
        <div className="col-5 ms-1  ">
          {props.tdo.assignee && <i><FaUser className='mb-1' />  {props.tdo.assignee.value}</i>}

        </div>
      </div>
      <ShowTags tdo={props.tdo} />
    </div>

  )
}

function ShowTags(props) {
  const { showTagList, setShowTagList } = useContext(Appcontext)
  return (
    <div className="row mt-1 d-flex align-items-center justify-content-start word-wrap">

      <p>{props.tdo.tags ? props.tdo.tags.map((tag, i) => {
        if (i < 3 && !showTagList) {
          return (<small className='me-1 bg-info bg-gradient ms-1 tagtext  rounded-3 p-1'>#{tag.value}</small>)
        }
        else if (i === 3 && !showTagList) {
          return (<i onClick={() => {
            setShowTagList(true);
          }}><span className='border rounded-circle p-1 bg-secondary'>+{props.tdo.tags.length - 3}</span></i>)
        }
        else {
          return null;
        }
      }) : null}</p>
    </div>
  )
}
export default SubRow
