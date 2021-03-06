import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DetailIcon from "@material-ui/icons/Person";
const styles = theme => ({
  root: {
    width: "90%",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1
  },
  grow: {
    flexGrow: 1
  },
  heading: {
    fontSize: "1.05rem",
    fontWeight: "500",
    display: "flex"
  },
  rootContainer: {
    width: "100%",
    paddingLeft: "8px",
    marginBottom: "30px"
  },
  container: {
    width: "100%",
    paddingLeft: "8px"
  },
  menu: {
    position: "absolute",
    right: "10px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Details extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container
          className={classes.rootContainer}
          justify="center"
          spacing={8}
        >
          <Grid item xs={11}>
            <Typography className={classes.heading} color="secondary">
              <DetailIcon color="primary" /> &nbsp; Basic Details
            </Typography>
          </Grid>

          <Paper className={classes.root} elevation={1}>
            <Grid
              container
              className={classes.container}
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={8}
            >
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Docket Number
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography variant="body2" component="h3">
                  {this.props.docketData.docket_no}
                </Typography>
              </Grid>
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Ticket Priority
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography variant="body2" component="h3">
                  {this.props.docketData.priority}
                </Typography>
              </Grid>
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Customer Name
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography variant="body2" component="h3">
                  {this.props.docketData.customer_name}
                </Typography>
              </Grid>
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Phone
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography variant="body2" component="h3">
                  9870326481
                </Typography>
              </Grid>
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Email
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography variant="body2" component="h3">
                  sh88688@gmail.com
                </Typography>
              </Grid>
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Created On
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography variant="body2" component="h3">
                  {this.props.docketData.created_on}
                </Typography>
              </Grid>
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Last Modified On
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography variant="body2" component="h3">
                  2019/03/14 12:11:05
                </Typography>
              </Grid>
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Ticket Type
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography variant="body2" component="h3">
                  {this.props.docketData.ticket_type}
                </Typography>
              </Grid>
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Ticket Status
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography
                  style={{ color: this.props.docketData.status_color }}
                  variant="body2"
                  component="h3"
                >
                  {this.props.docketData.ticket_status}
                </Typography>
              </Grid>
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Disposition
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography variant="body2" component="h3">
                  {this.props.docketData.disposition}
                </Typography>
              </Grid>
              <Grid item lg={6} md={5} xs={5}>
                <Typography variant="caption" component="h3">
                  Sub Disposition
                </Typography>
              </Grid>
              <Grid item lg={6} md={7} xs={7}>
                <Typography variant="body2" component="h3">
                  {this.props.docketData.sub_disposition}
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} xs={12} />
              <Grid item lg={12} md={12} xs={12}>
                <Typography variant="caption" component="h3">
                  Problem Reported
                </Typography>
                <Typography variant="body2" component="h3">
                  {this.props.docketData.problem}
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <Typography variant="caption" component="h3">
                  Agent Remarks
                </Typography>
                <Typography variant="body2" component="h3">
                  Payment
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} xs={12}>
                <Typography variant="caption" component="h3">
                  Last Assigned Remarks
                </Typography>
                <Typography variant="body2" component="h3">
                  Login Issue
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
