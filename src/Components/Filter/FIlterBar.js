import React, { useContext, useState } from "react";
import Select from "react-select"
import { Appcontext } from "../../Appcontext";
import DatePicker from "react-datepicker";
import { Critiria, FILTER, Priority, styles } from "../../Utilities/Data";
import { DATEPICKERSTYLE, FILTERBARSTYLE } from "../styles";

function FIlterBar() {
  return (
    <div className="container-fluid p-2">
      <div className={FILTERBARSTYLE}>
        <FilterButton />
        <Category />
        <CategoryOptions />
        <FilterCloseButton />
      </div>
      <hr className="mt-3"></hr>
    </div>
  );
}

function CategoryOptions() {
 return (<div className="p-0">
    <PrioritySelector />
    <TagSelector />
    <DueSelector/>
    <AssigneeSelector/>
  </div>)
}

function Category() {
  const { stateFilter, dispatchFilter } = useContext(Appcontext);
  return (
    <>
      {stateFilter.filter && <div className="mb-3 m-0 p-0"><Select
        onChange={val => dispatchFilter({ type: FILTER.SUBSELECT, payload: val })}
        options={Critiria} styles={styles} /></div>}
      {(stateFilter.option !==FILTER.NONE) && stateFilter.filter && <p>IS</p>}
    </>
  )
}
function PrioritySelector() {
  const { stateFilter, dispatchFilter } = useContext(Appcontext);
  return (
    <>
      {stateFilter.option === FILTER.PRIORITY && stateFilter.filter &&
        <Select
          onChange={value => dispatchFilter({ type: FILTER.SET, payload: value })}
          options={Priority} styles={styles} />}
    </>
  )
}
function TagSelector() {
  const { stateTags, stateFilter, dispatchFilter } = useContext(Appcontext);
  return (
    <>
      {stateFilter.option === FILTER.TAG && stateFilter.filter &&
        <Select
          onChange={value => dispatchFilter({ type: FILTER.SET, payload: value })}
          options={stateTags} styles={styles} />}
    </>
  )
}

function AssigneeSelector(){
  const { stateFilter, dispatchFilter,user } = useContext(Appcontext);
  return (
    <>
      {stateFilter.option === FILTER.ASSIGNEE && stateFilter.filter &&
        <Select
          onChange={value => dispatchFilter({ type: FILTER.SET, payload: value })}
          options={user} styles={styles} />}
    </>
  )
}
function DueSelector() {
  const [dueDate, setDueDate] = useState(new Date());
  const { stateFilter, dispatchFilter } = useContext(Appcontext);
  return (
    <>
      {stateFilter.option === FILTER.DUEDATE && stateFilter.filter &&
        <DatePicker
          className={DATEPICKERSTYLE}
          selected={dueDate}
          todayButton="Vandaag"
          onChange={(date) => {
            setDueDate(date);
            dispatchFilter({ type: FILTER.SET, payload: date })
          }}
          dateFormat="MMMM d, yyyy"
        />}
    </>
  )
}
function FilterButton() {
  const { stateFilter, dispatchFilter } = useContext(Appcontext);
  return (
    <> {!stateFilter.filter && <button className="btn btn-outline-primary mb-3"
      onClick={() =>{
        console.log("filter on");
        dispatchFilter({ type: FILTER.ON})}}>FILTERS</button>}
      {stateFilter.filter && <p>WHERE</p>}
    </>
  )
}
function FilterCloseButton() {
  const { stateFilter, dispatchFilter } = useContext(Appcontext);
  return (
    <>
      {stateFilter.filter && <button className="btn btn-outline-danger mb-3 mt-4"
        onClick={() => {
          dispatchFilter({ type: FILTER.RESET });
          dispatchFilter({ type: FILTER.OFF })
        }
        }>CLOSE</button>
      }
    </>
  )
}
export default FIlterBar;
