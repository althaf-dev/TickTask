import React from "react";

import TagsInput from "./TagsInput";
import TagSuggestion from "./TagSuggestion";
function Tags(props) {
  return (
    <div className="col-3 tags" tabIndex={0}>
      <form>
        <label>tags</label>
        <div>
          <TagsInput props={{ tdo: props.props.tdo }} />
          <TagSuggestion props={{ tdo: props.props.tdo }} />
        </div>
      </form>
    </div>
  );
}

export default Tags;
