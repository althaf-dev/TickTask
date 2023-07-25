import React, {useContext} from 'react'
import { Appcontext } from '../../Appcontext';

function TagSuggestion(props) {
    const { todos, setTodos, tags,tag} = useContext(Appcontext);
  return (
    <>
    
    {tags.map((t) => {
 
        if (t.tg.includes(tag)||!tag) {
          return (
            <div
              className="border-bottom tag d-flex justify-content-start"
              onClick={(e) => {
                const tag = tags.filter((t)=>t.tg===e.target.innerText)
             
                e.target.style.backgroundColor=tag[0].color;
                console.log(tag);
                setTodos(
                  todos.map((td) => {
                    if (props.props.tdo.id === td.id) {
                      if (td.tags) {
                        td.tags.push(tag[0]);
                      } else {
                        td.tags = [tag[0]];
                      }
                    }
                    return td;
                  })
                );
              }}
            >
             <p> {t.tg}</p>
            {/* <div className="dropdown p-0 m-0">
              <i className="drop-down-toggle p-0" data-bs-toggle='dropdown'>...</i>
              <ul className="dropdown-menu">
                <li className="dropdown-item">color</li>
              </ul>
            </div> */}
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
