import React, { useContext } from "react";
import { Appcontext } from "../../Appcontext";

function Taglist(props) {
  const { setShowTagList } = useContext(Appcontext);

  return (
    <div className=" border bg-dark bg-gradient rounded-2 mb-3 taglist wrap d-flex flex-wrap p-3">
      {props.props.tdo.tags
        ? props.props.tdo.tags.map((tag) => {
            let bg =
              "#" +
              tag.color[0].toString(16) +
              tag.color[1].toString(16) +
              tag.color[2].toString(16) +
              (60).toString(16);
            let fc =
              "#" +
              (tag.color[0]+5 ).toString(16) +
              (tag.color[1]+10 ).toString(16) +
              (tag.color[2]+5 ).toString(16);
            return (
              <span
                className="me-2 mb-2 border rounded-top-right-1 rounded-bottom-right-1 ps-1 pe-1 "
                style={{ backgroundColor: bg ,color:fc}}
              >
                {tag.tg}
              </span>
            );
          })
        : null}

      <button
        className="btn btn-ouline  text-white"
        onClick={() => {
          setShowTagList(false);
        }}
      >
        Show less..{" "}
      </button>
    </div>
  );
}

export default Taglist;
