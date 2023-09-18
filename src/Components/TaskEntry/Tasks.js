import React, { useContext } from 'react'
import { Appcontext } from '../../Appcontext';
import { ACTIVETODOSTYLE, DELETETODOSTYLE, FINISHTODOSTYLE } from '../styles';
import { drag } from '../../Utilities/dragAndDrop';
import { getTask } from '../../stateLogics';
import TrashBox from '../Options/TrashBox';
import PriorityFlag from '../Options/PriorityFlag';
import SubRow from '../ActiveTasks/SubRow';
import TaskEdit from './TaskEdit';
import SecondRow from '../Options/SecondRow';
import ThirdRow from '../Options/ThirdRow';
import { TagsSelect } from '../Options/Tags';
import { AssigneeSelect } from '../Options/Assignee';
import { CATEGORY, FILTER } from '../../Utilities/Data';

function Tasks(props) {

    const { stateTodos, stateFilter, SetTagAdd, SetEditMode } = useContext(Appcontext);
    let Tasks = getTask(stateTodos, props.categoryBox);
    return (Tasks.map(tdo => {
        if (filter(tdo, stateFilter)) {
            return tasksWraper(tdo, props.categoryBox, SetTagAdd, SetEditMode)
        }
        else return null;
    }))
}
function tasksWraper(tdo, cat, SetTagAdd, SetEditMode) {
    return (
        <div className='box pb-2'  key={tdo.id}>
            <div id={tdo.id}
                className={(cat === CATEGORY.DELETE) ? DELETETODOSTYLE :
                    (cat === CATEGORY.FINISH) ? FINISHTODOSTYLE : ACTIVETODOSTYLE}
                tabIndex={0}
                draggable="true"
                onDragStart={drag}
            >   <TaskComponents tdo={tdo} />
                <SubRow tdo={tdo} />
                {/* <EditRow tdo ={tdo}/> */}
                {(cat === CATEGORY.ACTIVE) && <EditRow tdo={tdo} />}
            </div>
        </div>
    )
}
function TaskComponents(props) {

    return (
        <div className="row pt-3 white p-1">
            <PriorityFlag tdo={props.tdo} />
            <div className="col-8 wrap">
                {!props.tdo.edit && <p>{props.tdo.item}</p>}
                {props.tdo.edit && <TaskEdit tdo={props.tdo} />}
            </div>
            <TrashBox tdo={props.tdo} />
        </div>
    )
}
function EditRow(props) {
    return (
        <>
            <SecondRow tdo={props.tdo} />
            <ThirdRow tdo={props.tdo} />
            <TagsSelect tdo={props.tdo} />
            <AssigneeSelect tdo={props.tdo} />
        </>
    )
}
function filter(tdo, stateFilter) {
    let due = tdo.DueDate ? new Date(tdo.DueDate).toDateString() : null;
    let FilterTags = (stateFilter.tags !== FILTER.NONE) ? tdo.tags.filter((el) =>
        el.value === stateFilter.tags).length : true;
    let FilterDue = (stateFilter.due !== FILTER.NONE) ? due === stateFilter.due : true;
    let filterPriority = stateFilter.priority.includes(tdo.priority);
    let filterAssigne = (stateFilter.assignee !== FILTER.NONE && tdo.user) ?
        (stateFilter.assignee === tdo.user.value) : true;
    let search = (stateFilter.search !== FILTER.NONE) ? (tdo.item.includes(stateFilter.search)) : true;
    let filter = filterPriority && FilterTags && FilterDue && filterAssigne && search;
    return filter;
}
export default Tasks
