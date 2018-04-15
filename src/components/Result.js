import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ProgressBar, { Circle } from "react-progressbar.js";
import Typography from "material-ui/Typography";

class Result extends Component {
  render() {
    const total = this.props.total;
    const answersRight = this.props.quizResult;
    const progress = answersRight / total;

    const options = {
      strokeWidth: 20,
      color: "green",
      trailColor: "#D3D3D3"
    };

    const containerStyle = {
      width: "200px",
      height: "200px"
    };
    return (
      <center>
        <ReactCSSTransitionGroup
          className="container result"
          component="div"
          transitionName="fade"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={500}
          transitionAppear
          transitionAppearTimeout={500}
        >
          <Typography>
            <h2>
              {progress * 100}% success rate
            </h2>
          </Typography>
          <Circle
            progress={progress}
            initialAnimate={true}
            containerStyle={containerStyle}
            options={options}
          />
          <br />
          <div>
            You sent <strong>{this.props.quizResult}</strong> out of the{" "}
            {this.props.total} elements to the right family! Home sweet home.
          </div>
        </ReactCSSTransitionGroup>
      </center>
    );
  }
}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired
};

export default Result;
