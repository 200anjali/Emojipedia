import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <p className="emoji" role="img">
          {props.emoji}
        </p>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Entry;
