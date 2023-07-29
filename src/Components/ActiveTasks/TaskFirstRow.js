import React, { useContext } from "react";
import SecondRow from "../Options/SecondRow";
import ThirdRow from "../Options/ThirdRow";
import "../Options/SecondRow.css";
import PriorityFlag from "../Options/PriorityFlag";
import TrashBox from "../Options/TrashBox";
import  SubRow from '../ActiveTasks/SubRow'
import { Appcontext } from "../../Appcontext";
import Taglist from "../Options/Taglist";


function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function TaskFirstRow(props) {
   const {showTagList} = useContext(Appcontext);
  return (
    <div
      id={props.props.tdo.id}
      className=" container bg-dark bg-gradient  rounded-3 ps-2 pb-3 pe-1 mt-1 drag box"
      tabIndex={1}
      draggable="true"
      onDragStart={(ev) => drag(ev)}
    >
       
      <div className="row pt-2">
        <PriorityFlag  tdo = {props.props.tdo}  />
        <div className="col-8 wrap"><p>{props.props.tdo.item}</p></div>
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
