import React, {useContext} from 'react'
import { Appcontext } from '../../Appcontext';
function TagSuggestion(props) {
    const { todos, setTodos, tags,tag} = useContext(Appcontext);
  return (
    <>
    
    {tags.map((tg) => {
        if (tg.includes(tag)||!tag) {
          return (
            <div
              className=" border border-2 tag d-flex justify-content-evenly"
              onClick={(e) => {
                console.log(e.target.innerText);
                setTodos(
                  todos.map((td) => {
                    if (props.props.tdo.id === td.id) {
                      if (td.tags) {
                        td.tags.push(e.target.innerText);
                      } else {
                        td.tags = [e.target.innerText];
                      }
                    }
                    return td;
                  })
                );
              }}
            >
             <p> {tg}</p>
            <div className="dropdown p-0 m-0">
              <i className="drop-down-toggle p-0" data-bs-toggle='dropdown'>...</i>
              <ul className="dropdown-menu">
                <li className="dropdown-item">color</li>
              </ul>
            </div>
            </div>
          );
        }
        else{
          return null;
        }
      })}
    
    </>
    
  )
}

export default TagSuggestion
