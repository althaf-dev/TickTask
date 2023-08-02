import React, { useContext } from "react";
import SecondRow from "../Options/SecondRow";
import ThirdRow from "../Options/ThirdRow";
import "../Options/SecondRow.css";
import PriorityFlag from "../Options/PriorityFlag";
import TrashBox from "../Options/TrashBox";
import  SubRow from '../ActiveTasks/SubRow'
import { Appcontext } from "../../Appcontext";
import Taglist from "../Options/Taglist";
import TaskEdit from "../TaskEntry/TaskEdit";


function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function TaskFirstRow(props) {
   const {showTagList} = useContext(Appcontext);
  return (
    <div
      id={props.props.tdo.id}
      className=" container bg-primary bg-gradient  rounded-3 ps-2 pb-0 pe-1 mt-2 drag box"
      tabIndex={1}
      draggable="true"
      onDragStart={(ev) => drag(ev)}
    >
       
      <div className="row pt-1">
        <PriorityFlag  tdo = {props.props.tdo}  />
        <div className="col-8 wrap">
          {!props.props.tdo.edit && <p>{props.props.tdo.item}</p>}
          {props.props.tdo.edit && <TaskEdit tdo={props.props.tdo}/>}
          </div>
        <TrashBox tdo = {props.props.tdo}  />
      </div>

      <SubRow tdo = {props.props.tdo} />
      {showTagList?<Taglist tdo = {props.props.tdo} />:null}
      <SecondRow tdo = {props.props.tdo}  />
      <ThirdRow tdo = {props.props.tdo}  />

    </div>
  );
}

export default TaskFirstRow;
