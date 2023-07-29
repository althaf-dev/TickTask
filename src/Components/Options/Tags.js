import React from "react";
import TagsInput from "./TagsInput";
import TagSuggestion from "./TagSuggestion";
import Taglist from "./Taglist";
function Tags(props) {
  return (
    <div className="col-3 tags drop-down" >
      <div className="dropdown">
        <button
          className="btn btn-secondary border-0 bg-transparent "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Tags
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
