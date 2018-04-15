import React from "react";
import Argon from "./images/argon.jpg";

function Question(props) {
  return (
    <h2 className="question">
      {props.content}
      <img src={props.image} width="50%" />
    </h2>
  );
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
