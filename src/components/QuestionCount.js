import React from "react";
import ProgressBar, { Line } from "react-progressbar.js";

function QuestionCount(props) {
  var done = props.counter;
  if (done > 0) {
    done = done - 1;
  }
  const total = props.total;
  const progress = done / total;

  const options = {
    strokeWidth: 3,
    color: "green",
    trailColor: "#D3D3D3"
  };

  return (
    <div className="questionCount">
      <center>
        <h1>
          Orphan #{props.counter}
        </h1>
      </center>
      <Line progress={progress} initialAnimate={true} options={options} />
    </div>
  );
}

QuestionCount.propTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

export default QuestionCount;
