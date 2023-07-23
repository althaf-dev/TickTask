import React from "react";
import SetPriority from "./SetPriority";
import "./SecondRow.css";
import Tags from "./Tags";

function ThirdRow(props) {
  return (
    <div className="row pb-1 show">
      <SetPriority props={{ tdo: props.props.tdo }} />
      <Tags props={{ tdo: props.props.tdo }} />
      <div className="col-3">
        <small>Edit task</small>
      </div>
      <div className="col-3">
        {" "}
        <small>
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-plus"></i>
        </small>
      </div>
    </div>
  );
}

export default ThirdRow;
