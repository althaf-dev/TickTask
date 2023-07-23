import React, { useContext } from "react";
import { Appcontext } from "../../Appcontext";

function handleInput(e, props, todos, setTodos, tags, setTags, setTag) {

  setTag(e.target.value);
  if (tags.includes(e.target.value)) {
    setTodos(
      todos.map((td) => {
        if (props.props.tdo.id === td.id) {
          if (td.tags) {
            if (!td.tags.includes(e.target.value)) {
              td.tags.push(e.target.value);
            }
          } else {
            td.tags = [e.target.value];
          }
        }
        return td;
      })
    );
    
  } else if (e.target.value.includes(",")) {
    let tg = e.target.value.slice(0, e.target.value.length - 1);
    console.log(tg);
    setTags([...tags, e.target.value.slice(0, e.target.value.length - 1)]);
    insertTag(setTodos, props, tg, todos);
    e.target.value = null;
  }
}
function insertTag(setTodos, props, tg, todos) {
  setTodos(
    todos.map((td) => {
      if (props.props.tdo.id === td.id) {
        if (td.tags) {
          td.tags.push(tg);
        } else {
          td.tags = [tg];
        }
      }
      return td;
    })
  );
}
function TagsInput(props) {
  const { todos, setTodos, tags, setTags, setTag } = useContext(Appcontext);
  return (
    <input
      autocomplete="off"
      placeholder="Enter , after tag to create new tag"
      onChange={(e) =>
        handleInput(e, props, todos, setTodos, tags, setTags, setTag)
      }
    />
  );
}

export default TagsInput;
