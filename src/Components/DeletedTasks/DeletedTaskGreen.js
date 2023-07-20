import React from "react";

function DeletedTaskGreen(props) {
  return (
    
    <div className="row pt-3 text-success">
      <div className="col-8">
        <p>{props.item}</p>
      </div>
    </div>
  );
}

export default DeletedTaskGreen;
