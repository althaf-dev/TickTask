import React ,{useContext, useEffect, useRef}from "react";
import { FaTags } from "react-icons/fa6";
import { Appcontext } from "../../Appcontext";
import CreatableSelect from 'react-select/creatable';
import { ACTION, styles } from "../../Utilities/Data";

function Tags(props) {
  const { tagAdd,SetTagAdd,SetEditMode} = useContext(Appcontext);
  return (
    <div className="col-2 mt-2 ms-3">
    {!tagAdd && <FaTags className="edit-icon-hover"
    onClick={()=>{      
      SetTagAdd(true)
      SetEditMode(false);}} />}
    </div>
  );
}

export function TagsSelect(props) {
  const { tagAdd, stateTags, SetTagAdd, dispatchTags, dispatchTodos } = useContext(Appcontext);
  const TagSelectRef = useRef(null);
  useEffect (()=>{

    if(TagSelectRef.current) TagSelectRef.current.focus();
  })
  return (<>
    {tagAdd && <CreatableSelect
      ref={TagSelectRef}
      className="mt-2  show" isMulti
      placeholder="Select Tags"
      value={props.tdo.tags}
      onChange={value => {

        // Note:Firebase Do not support a field start with _. Creatable select value contains _isNew_ field
        // below code seperate the _isNew_ field and dispatch rest.

        const tags = value.map(({label,value,...rest})=>{return {label,value}});
        dispatchTodos({ type: ACTION.SETTAG, payload: { id: props.tdo.id, val: tags } });
        dispatchTags({ type: ACTION.ADDTAG, payload: value })
      }}
      options={stateTags} onBlur={() => SetTagAdd(false)} styles={styles} />}
  </>
  )
}
export default Tags;
