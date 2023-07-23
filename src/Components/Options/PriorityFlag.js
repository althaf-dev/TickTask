import React from "react";

function PriorityFlag(props) {
  return (
    <div className="col-1">
      {props.props.tdo.priority === "1" ? (
        <i className="fa-solid fa-flag text-danger"></i>
      ) : props.props.tdo.priority === "2" ? (
        <i className="fa-solid fa-flag " style={{ color: "orange" }}></i>
      ) : (
        <i className="fa-solid fa-flag text-info"></i>
      )}
    </div>
  );
}

export default PriorityFlag;
