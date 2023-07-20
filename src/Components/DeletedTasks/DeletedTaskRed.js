import React from "react";

function DeletedTaskRed(props) {
  return (
    
    <div className="row pt-3 text-primary">
      <div className="col-8">
        <p>{props.item}</p>
      </div>
    </div>
  );
}

export default DeletedTaskRed;
