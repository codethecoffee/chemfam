import React from "react";
import ProgressBar, { Line } from "react-progressbar.js";
import "../index.css";

function QuestionCount(props) {
  var done = props.counter;
  if (done > 0) {
    done = done - 1;
  }
  const total = props.total;
  const progress = done / total;

  const options = {
    strokeWidth: 2.5,
    color: "#064273",
    trailColor: "#def3f6"
  };

  return (
    <div className="questionCount">
      <center>
        <h1 className="orphan-name">
          Orphan #{props.counter}
        </h1>
      </center>
      <br />
      <Line progress={progress} initialAnimate={true} options={options} />
    </div>
  );
}

QuestionCount.propTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

export default QuestionCount;
