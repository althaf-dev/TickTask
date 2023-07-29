import React, { useContext, useState } from "react";
import Select from "react-select"
import { Appcontext } from "../../Appcontext";
import DatePicker from "react-datepicker";

const Critiria = [{ value: 'Tag', label: 'Tag' },
{ value: 'Priority', label: 'Priority' },
{ value: 'Due', label: 'Due' }]

const Priority = [{ value: "1", label: "High" },
{ value: "2", label: "Medium" },
{ value: "3", label: "Low" },
{ value: 'All', label: "All" }]
const styles = {

  control: (style) => ({ ...style, backgroundColor: "grey", borderColor: "white", width: "120px", color: "blue" }),
  option: (style) => ({ ...style, backgroundColor: "#333", color: "red" })

}

function FIlterBar() {

  const [Option, setOption] = useState();
  const [dueDate, setDueDate] = useState(new Date());
  const { Filter, setFilter, tags } = useContext(Appcontext);

  function handleChange(selectedOption) {

      console.log(selectedOption.value);
      setOption(selectedOption.value);
      setFilter(Filter.map((el)=>{

        el.tags = 'all';
        el.priority = ["1", "2", "3", "0"];
        el.due = 'all'
        return el;

      }))

  }
    const tagsOption = tags.map((el)=>{return {'value':el.tg,'label':el.tg}});


  function handleOption(selectedOption) {

    console.log("handleoption")

      setFilter(Filter.map((el) => {

      if (selectedOption.value !== 'All') {

        el.priority = (Option === 'Priority')?[selectedOption.value]:["1", "2", "3", "0"];
        el.tags   = (Option === 'Tag')?selectedOption.value:"all";
        el.due   = (Option === 'Due')?selectedOption.toDateString():"all";

        console.log(selectedOption.value);

      }
      else {

        el.priority = ["1", "2", "3", "0"];
      }

      return el;
    }));

   
    
    
    console.log(Filter);
  }
  return (
    <div>
      <h4>Filters</h4>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">

          <ul className="navbar-nav me-2 mt-1 ">
            <li className="nav-item me-3 mt-2 d-flex  align-items-center">Where</li>
            <li className="nav-item me-3 mt-2"><Select  onChange={handleChange} options={Critiria} styles={styles} /></li>
            <li className="nav-item me-4 mt-3">IS</li>
            <li className="nav-item me-5 mt-2 ">
              
              {Option === 'Priority' && <Select  onChange={handleOption} options = {Priority} styles={styles}/> }
              {Option === 'Tag' && <Select onChange={handleOption} options = {tagsOption} styles={styles}/> }
              {Option === 'Due' &&  <DatePicker 
          className="bg-dark bg-gradient border-1 border-light rounded-2 text-white p-2"
          selected={dueDate}
          todayButton="Vandaag"
          onChange={(date) => {
            
            setDueDate(date);
            console.log(dueDate);
            handleOption(date);
          }}
          dateFormat="MMMM d, yyyy"
        />}


             </li>


          </ul>
        </div>

      </nav>
    </div>
  );
}

export default FIlterBar;
