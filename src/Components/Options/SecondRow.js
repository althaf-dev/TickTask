import React, {useContext } from "react";
import "./SecondRow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Appcontext } from "../../Appcontext";
import './SecondRow.css'
import SetPriority from "./SetPriority";
import { ACTION } from "../../Utilities/Data";

function SecondRow(props) {
  const { dispatchTodos } = useContext(Appcontext);
  return (
    <div className="row pb-1 m-0 fs-6 show">
      <hr className="m-0" />
    <div className="me-5 col-3">
      <SetPriority tdo={props.tdo} />
      </div>
      <div className="col-3 ms-3 me-2">
        <DatePicker
          className="border-0 rounded-2 font"
          selected={props.tdo.DueDate ? new Date(props.tdo.DueDate): new Date()}
          onChange={
            date => dispatchTodos({type:ACTION.SETDATE,payload:{id:props.tdo.id,val:date}})
          }
        />
      </div>
    </div>
  );
}

export default SecondRow;
