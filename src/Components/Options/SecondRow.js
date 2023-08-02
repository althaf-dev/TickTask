import React, {useState,useContext } from "react";
import "./SecondRow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Appcontext } from "../../Appcontext";
import './SecondRow.css'
import patch from "../patch";
import { FaUser } from "react-icons/fa6"; 

function SecondRow(props) {
  const {setTodos,todos}  = useContext(Appcontext);
  const [dueDate, setDueDate] = useState(new Date());
  return (
    <div className="row pb-1 m-0 fs-6 show">
      <hr className="m-0"/>
      <div className="col-1">
        <small className="c">Due</small>
      </div>
      <div className="col-3">
        <DatePicker 
          className=" border-0 rounded-2 font"
          selected={dueDate}
   
          shouldCloseOnSelect={false}
          placeholderText="I have been cleared!"
          onChange={(date) => {
            
            setTodos(todos.filter((td) => {
             
              if (td.id === props.tdo.id) {
                td.DueDate = date;
                patch(td,td.id);

              }
              return td;
            }))
      
            setDueDate(date);
    
          }}
          dateFormat="MMMM d, yyyy"
        />
      </div>
     <div className="col-6 ms-5 text-primary ">
      {props.tdo.user && <i><FaUser/> : {props.tdo.user}</i>}
      {!props.tdo.user && <i><FaUser/>: None</i>}
     </div>
      
     
    </div>
  );
}

export default SecondRow;
