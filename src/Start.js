import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Button, Icon, Modal } from "semantic-ui-react";
import BuildHerLogo from "./buildher-logo.png";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import logo from "./chem.gif";
import "./App.css";
import "./startStyles.css";

const styles = theme => ({
  root: {
    padding: "10%",
    backgroundColor: "white"
  }
});

class Start extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <center>
          <img src={logo} className="logo" alt="logo" />
          <h2 className="App-header-text"> chem fam</h2>
          <div />
          <Button className="startButton" inverted color="blue" size="huge">
            <NavLink to="/game">start game</NavLink>
          </Button>
          <div />
          <div>
            <span> 1st place at BuildHer Hackathon</span>
          </div>
        </center>
      </div>
    );
  }
}

Start.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Start);
