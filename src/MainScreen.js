import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Start from "./Start";
import App from "./App";

const styles = theme => ({
  root: {
    padding: "10%",
    backgroundColor: "white"
  }
});

class MainScreen extends Component {
  render() {
    return (
      <HashRouter>
        <div className={this.props.classes.root}>
          <div>
            <Route exact path="/" component={Start} />
            {/* <Route path="/instructions" component={Instructions} /> */}
            <Route path="/game" component={App} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

MainScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainScreen);
