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

  control: (style) => ({ ...style, width: "100%", color: "blue" }),
  option: (style) => ({ ...style, color: "red" })

}

function FIlterBar() {

  const [Option, setOption] = useState();
  const [dueDate, setDueDate] = useState(new Date());
  const { Filter, setFilter, tags } = useContext(Appcontext);
  const [FilterSelect, setFilterSelect] = useState(false);

  function handleChange(selectedOption) {

    console.log(selectedOption.value);
    setOption(selectedOption.value);
    setFilter(Filter.map((el) => {

      el.tags = 'all';
      el.priority = ["1", "2", "3", "0"];
      el.due = 'all'
      return el;

    }))

  }
  const tagsOption = tags.map((el) => { return { 'value': el.tg, 'label': el.tg } });


  function handleOption(selectedOption) {

    console.log("handleoption")

    setFilter(Filter.map((el) => {

      if (selectedOption.value !== 'All') {

        el.priority = (Option === 'Priority') ? [selectedOption.value] : ["1", "2", "3", "0"];
        el.tags = (Option === 'Tag') ? selectedOption.value : "all";
        el.due = (Option === 'Due') ? selectedOption.toDateString() : "all";

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
    <div className="container-fluid p-2">


      <div className="row d-flex flex-column justify-content-center p-0">

        {!FilterSelect && <button className="btn btn-outline-primary mb-3" onClick={() => setFilterSelect(true)}>FILTERS</button>}

        
        {FilterSelect && <p>WHERE</p>}

        {FilterSelect && <div className="mb-3 m-0 p-0"><Select onChange={handleChange} options={Critiria} styles={styles} /></div>}



        {Option === 'Priority' && FilterSelect && <p>IS</p>}
        {Option === 'Tag' && FilterSelect && <p>IS</p>}

        <div className="p-0">
          {Option === 'Priority' && FilterSelect && <Select onChange={handleOption} options={Priority} styles={styles} />}
          {Option === 'Tag' && FilterSelect && <Select onChange={handleOption} options={tagsOption} styles={styles} />}

          {Option === 'Due' && FilterSelect && <DatePicker
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
        </div>
          {FilterSelect && <button className="btn btn-outline-danger mb-3 mt-4" onClick={() => {
            setFilterSelect(false);
            handleChange('all');
          }
          }>CLOSE</button>}
        
      </div>
      
      <hr className="mt-3"></hr>
    </div>
  );
}

export default FIlterBar;
