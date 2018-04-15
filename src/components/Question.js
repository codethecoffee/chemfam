import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import Popover from "material-ui/Popover";
import Typography from "material-ui/Typography";
import Icon from "material-ui/Icon";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  typography: {
    margin: theme.spacing.unit * 2
  },
  popover: {
    width: "50%"
  }
});

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorOriginVertical: "top",
      anchorOriginHorizontal: "left",
      transformOriginVertical: "top",
      transformOriginHorizontal: "left",
      positionTop: 200,
      positionLeft: 400,
      anchorReference: "anchorEl"
    };
  }

  handleClickButton = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  anchorEl = null;

  render() {
    const {
      open,
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
      positionTop,
      positionLeft,
      anchorReference
    } = this.state;
    return (
      <Grid container>
        <Grid item xs={5}>
          <Paper className={this.props.classes.root}>
            {this.props.content}
          </Paper>
          <br />
          <br />
          <center>
            <Button
              buttonRef={node => {
                this.anchorEl = node;
              }}
              variant="raised"
              className={this.props.classes.button}
              onClick={this.handleClickButton}
            >
              Hint
            </Button>
          </center>

          <Popover
            className={this.props.classes.popover}
            open={open}
            anchorEl={this.anchorEl}
            anchorReference={anchorReference}
            // anchorPosition={{ top: positionTop, left: positionLeft }}
            onClose={this.handleClose}
            // anchorOrigin={{
            //   vertical: anchorOriginVertical,
            //   horizontal: anchorOriginHorizontal
            // }}
            // transformOrigin={{
            //   vertical: transformOriginVertical,
            //   horizontal: transformOriginHorizontal
            // }}
          >
            <Typography className={this.props.classes.typography}>
              {this.props.hint}
            </Typography>
          </Popover>
        </Grid>
        <Grid item xs={6}>
          <img src={this.props.image} width="100%" alt="Element" />
        </Grid>
      </Grid>
    );
  }
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Question);
