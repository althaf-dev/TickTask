import React, {useState,useContext } from "react";
import "./SecondRow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Appcontext } from "../../Appcontext";
import './SecondRow.css'

function SecondRow(props) {
  const {setTodos,todos}  = useContext(Appcontext);
  const [dueDate, setDueDate] = useState(new Date());
  return (
    <div className="row pb-1 m-0 fs-6 show">
      <hr />
      <div className="col-1">
        <small className="c">Due</small>
      </div>
      <div className="col-3">
        <DatePicker 
          className="bg-info bg-gradient border-0 rounded-2 font"
          selected={dueDate}
          onChange={(date) => {
            
            setTodos(todos.filter((td) => {
             
              if (td.id === props.tdo.id) {
                td.DueDate = date;

              }
              return td;
            }))
      
            setDueDate(date);
    
          }}
          dateFormat="MMMM d, yyyy"
        />
      </div>
     
      
     
    </div>
  );
}

export default SecondRow;
