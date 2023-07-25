import React from "react";

function FIlterBar() {
  return (
    <div>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">

            <ul className="navbar-nav me-auto ms-auto">
            <li className="nav-item me-5">Priority</li>
            <li className="nav-item me-5">Tag</li>
            <li className="nav-item me-5">Due</li>
        </ul>
        </div>
        
      </nav>
    </div>
  );
}

export default FIlterBar;
