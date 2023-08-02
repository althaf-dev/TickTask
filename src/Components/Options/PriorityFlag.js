import React from "react";

function PriorityFlag(props) {
  return (
    <div className="col-1">
      {props.tdo.priority === "1" ? (
        <i className="fa-solid fa-flag text-danger"></i>
      ) : props.tdo.priority === "2" ? (
        <i className="fa-solid fa-flag " style={{ color: "orange" }}></i>
      ) : props.tdo.priority === "3" ?(
        <i className="fa-solid fa-flag text-info"></i>): <i className="fa-solid fa-flag text-white"></i>
      }
    </div>
  );
}

export default PriorityFlag;
