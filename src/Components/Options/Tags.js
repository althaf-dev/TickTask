import React from "react";
import TagsInput from "./TagsInput";
import TagSuggestion from "./TagSuggestion";
import Taglist from "./Taglist";
import { FaTags } from "react-icons/fa6";
function Tags(props) {
  return (
    <div className="col-2 ms-2  tags drop-down " >
      <div className="dropdown">
        <button
          className="btn btn-secondary border-0 bg-transparent "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaTags className="edit-icon-hover"/>
        </button>
        
        <ul className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
          <li>
            <div>
             {props.tdo.tags?<Taglist  tdo={props.tdo }/>:null} 
              <TagsInput props={{ tdo: props.tdo }} />
              <div className="suggestions">
                <TagSuggestion props={{ tdo: props.tdo }} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tags;
