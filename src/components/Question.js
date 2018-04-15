import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Collapse from "material-ui/transitions/Collapse";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
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
  },
  card: {
    maxWidth: 400
  },
  media: {
    height: 194
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",

    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    // transform: "rotate(180deg)"
    backgroundColor: "green",
    color: "white"
  }
});

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={6}>
          <br />
          <br />

          <Card className={this.props.classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="Element symbol"
                  className={this.props.classes.avatar}
                >
                  Ar
                </Avatar>
              }
              title={this.props.name}
              subheader={this.props.location}
            />
            <CardContent>
              <Typography component="p">
                {this.props.content}
              </Typography>
            </CardContent>
            <CardActions
              className={this.props.classes.actions}
              disableActionSpacing
            >
              <Button
                className={classnames(this.props.classes.expand, {
                  [this.props.classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                Need a hint?
              </Button>
            </CardActions>

            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph variant="body2">
                  {this.props.hint}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
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
