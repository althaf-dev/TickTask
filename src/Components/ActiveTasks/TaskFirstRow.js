import React from 'react'
import SecondRow from '../Options/SecondRow';
import ThirdRow from '../Options/ThirdRow';


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  
  }
function TaskFirstRow(props) {
  return (
    <div id={props.props.tdo.id} className=" container bg-primary bg-gradient rounded-3 ps-2 mt-1 drag" draggable="true"
    onDragStart={(ev) => drag(ev)}>


    <div className="row pt-3">
                <div className="col-1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={() => {
                      props.props.setTodos(
                        props.props.todos.filter((td) => {
                          if (td.id === props.props.tdo.id) {
                            td.status = true;
                          }
                          return td;
                        })
                      );
                    }}
                  />
                </div>
                <div className="col-8">
                  <p>{props.props.tdo.item}</p>
                </div>
                <div className="col-1">
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => {

                      props.props.setTodos(props.props.todos.filter((td) => {
                        if (td.id === props.props.tdo.id) {
                          td.deleted = true;

                        }
                        return td;
                      }))
                    }}
                  ></i>
                </div>
              </div>
              <SecondRow props={{tdo:props.props.tdo}}/>
              <ThirdRow/>
              </div>
  )
}

export default TaskFirstRow
