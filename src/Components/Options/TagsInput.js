import React, { useContext } from "react";
import { Appcontext } from "../../Appcontext";
import randomColor from "randomcolor";

function handleInput(e, props, todos, setTodos, tags, tag, setTags, setTag) {
  setTag(e.target.value);

  if (e.target.value.includes(",")) {
    let tg = e.target.value.slice(0, e.target.value.length - 1);

    let color = randomColor({format:"rgbArray", luminosity:"light" ,hue: 'red'});
    console.log(color);
    setTags([...tags, {tg:tg,color:color}]);
    insertTag(setTodos, props, {tg:tg,color:color}, todos);
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
  console.log(todos);
}
function TagsInput(props) {
  const { todos, setTodos, tags, tag, setTags, setTag } =
    useContext(Appcontext);
  return (
    <input
      autocomplete="off"
      placeholder="Enter , after tag to create new tag"
      onChange={(e) =>
        handleInput(e, props, todos, setTodos, tags, tag, setTags, setTag)
      }
     className="border-0 "/>
  );
}

export default TagsInput;
