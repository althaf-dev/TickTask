import React, {useState,useContext } from "react";
import "./SecondRow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Appcontext } from "../../Appcontext";

function SecondRow(props) {
  const {setTodos,todos}  = useContext(Appcontext);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="row pb-1 m-0 fs-6">
      <hr />
      <div className="col-1">
        <small>Start</small>
      </div>
      <div className="col-3">
        <DatePicker
          className="bg-info bg-gradient border-0 rounded-2 font"
          selected={startDate}
          onChange={(date) => {
            
            setTodos(todos.filter((td) => {
             
              if (td.id === props.props.tdo.id) {
                td.startDate = date;

              }
              return td;
            }))
      
            setStartDate(date);
          }}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <div className="col-1 ms-5">
        <small>Due</small>
      </div>
      <div className="col-3">
        <DatePicker
          className="bg-info bg-gradient border-0 rounded-2 font"
          selected={startDate}
          onChange={(date) => {
            
            setTodos(todos.filter((td) => {
             
              if (td.id === props.props.tdo.id) {
                td.dueDate = date;

              }
              return td;
            }))
            setStartDate(date);
      }}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
     
    </div>
  );
}

export default SecondRow;
