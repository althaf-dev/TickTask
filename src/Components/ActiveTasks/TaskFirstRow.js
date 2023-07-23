import React from "react";
import SecondRow from "../Options/SecondRow";
import ThirdRow from "../Options/ThirdRow";
import "../Options/SecondRow.css";
import PriorityFlag from "../Options/PriorityFlag";
import TrashBox from "../Options/TrashBox";
import  SubRow from '../ActiveTasks/SubRow'


function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function TaskFirstRow(props) {
  return (
    <div
      id={props.props.tdo.id}
      className=" container bg-primary bg-gradient  rounded-3 ps-2 pe-1 mt-1 drag box"
      tabIndex={0}
      draggable="true"
      onDragStart={(ev) => drag(ev)}
    >
      <div className="row pt-3">
        <PriorityFlag props={{ tdo: props.props.tdo }} />
        <div className="col-8 wrap"><p>{props.props.tdo.item}</p></div>
        <TrashBox props={{ tdo: props.props.tdo }} />
      </div>

      <SubRow props={{ tdo: props.props.tdo }}/>
      <SecondRow props={{ tdo: props.props.tdo }} />
      <ThirdRow props={{ tdo: props.props.tdo }} />
    </div>
  );
}

export default TaskFirstRow;
