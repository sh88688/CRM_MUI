import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Call";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  card: {
    // "& :hover": {
    //   cursor: "pointer",
    //   background: "#f5f5f5"
    // }
  },
  title: {
    color: "#009688",
    flexGrow: 0.5,
    fontSize: "1.20rem",
    cursor: "pointer"
  },
  headerDiv: {
    display: "flex"
  },
  cardHeader: { paddingBottom: "0px", paddingTop: "5px" },
  ticketStatus: {
    paddingTop: "2px",
    paddingLeft: "5px",
    color: "orange"
  },
  cardContent: {
    paddingTop: "0px",
    paddingBottom: "5px"
  },
  typoContent: {
    marginBottom: "3px"
  },
  actions: {
    display: "flex",
    paddingBottom: "2px",
    paddingTop: "0px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    cursor: "pointer",
    padding: "8px",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  container: {
    marginBottom: "0px"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  iconButton: { padding: "8px" },
  icon: {
    fontSize: "20px"
  }
});

class DocketCard extends React.Component {
  state = {
    expanded: false
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  handleDocketClick = docketData => {
    this.props.history.push("/details", docketData);
  };

  render() {
    const { classes, data } = this.props;

    return (
      <div className={classes.card}>
        <Card>
          <CardHeader
            className={classes.cardHeader}
            title={
              <div className={classes.headerDiv}>
                <Typography
                  onClick={() => this.handleDocketClick(data)}
                  className={classes.title}
                  variant="h6"
                >
                  {data.docket_no}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: data.status_color }}
                  className={classes.ticketStatus}
                >
                  {data.ticket_status}
                </Typography>
              </div>
            }
            action={
              <div>
                <IconButton
                  className={classes.iconButton}
                  aria-label="Add to favorites"
                >
                  <a href="tel:9870326481">
                    <FavoriteIcon className={classes.icon} color="secondary" />
                  </a>
                </IconButton>

                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon className={classes.icon} color="secondary" />
                </IconButton>
              </div>
            }
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="caption" component="h3">
              Customer Name
            </Typography>
            <Typography
              className={classes.typoContent}
              variant="body2"
              component="h3"
            >
              {data.customer_name}
            </Typography>
            <Typography variant="caption" component="h3">
              Assigned By &nbsp;on&nbsp;&nbsp;{data.assigned_on}
            </Typography>
            <Typography variant="body2" component="h3">
              {data.assigned_by}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing />
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Grid container justify="center" spacing={8}>
                <Grid item xs={6}>
                  <Typography variant="caption">Ticket Type</Typography>
                  <Typography variant="body2">{data.ticket_type}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Priority</Typography>
                  <Typography variant="body2">{data.priority}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">Created On</Typography>
                  <Typography variant="body2">{data.created_on}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Disposition</Typography>
                  <Typography variant="body2">{data.disposition}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Sub Disposition</Typography>
                  <Typography variant="body2">
                    {data.sub_disposition}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">Problem</Typography>
                  <Typography variant="body2">{data.problem}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

DocketCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(DocketCard));
