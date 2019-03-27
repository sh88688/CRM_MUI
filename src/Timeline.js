import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NoteIcon from "@material-ui/icons/NoteOutlined";
import TasksIcon from "@material-ui/icons/Assignment";
import AllIcon from "@material-ui/icons/ViewList";
import FileIcon from "@material-ui/icons/FileCopy";
import AttachIcon from "@material-ui/icons/Attachment";
import TicketIcon from "@material-ui/icons/ConfirmationNumber";
import TimelineIcon from "@material-ui/icons/Schedule";
import Divider from "@material-ui/core/Divider";
import DocketBar from "./Components/docketBar";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: "2px", marginBottom: "0px" }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  heading: {
    fontSize: "1.05rem",
    fontWeight: "500",
    display: "flex"
  },
  avatar: {
    color: "#fff",
    backgroundColor: "#009688"
  },
  icon: {
    fontSize: "18px"
  },
  tabBar: {
    borderRadius: "4px 4px 0px 0px",
    boxShadow: "none",
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: {
    borderBottom: "1px solid #e8e8e8"
  },
  tab: {
    fontSize: "0.610rem"
  },
  listItem: {
    padding: "6px 2px 6px 16px",
    alignItems: "start"
  },
  listPrimary: {
    fontSize: "0.740rem"
  },
  listSecondary: {
    fontSize: "0.630rem",
    float: "right",
    marginTop: "8px"
  },
  grow: {
    flexGrow: 1
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
  state = {
    value: 0,
    dense: false,
    secondary: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <DocketBar />
        <Grid
          container
          className={classes.container}
          justify="center"
          spacing={8}
        >
          <Grid item xs={11}>
            <Typography className={classes.heading} color="secondary">
              <TimelineIcon color="primary" /> &nbsp; Timeline
            </Typography>
          </Grid>
          <br /> <br />
          <Paper className={classes.root} elevation={1}>
            <AppBar
              position="static"
              className={classes.tabBar}
              color="default"
            >
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                className={classes.tabsRoot}
                variant="fullWidth"
              >
                <Tab icon={<AllIcon />} label="All" className={classes.tab} />
                <Tab
                  icon={<NoteIcon />}
                  label="Private Notes"
                  className={classes.tab}
                />
                <Tab
                  icon={<TasksIcon />}
                  label="Tasks"
                  className={classes.tab}
                />
                <Tab
                  icon={<FileIcon />}
                  label="Documents"
                  className={classes.tab}
                />
              </Tabs>
            </AppBar>
            {value === 0 && (
              <TabContainer>
                <List dense>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <Avatar className={classes.avatar}>
                        <TasksIcon className={classes.icon} />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          className={classes.listPrimary}
                          variant="body1"
                        >
                          Task #1 'Change is services for port wise db
                          connection this is refer to dev team'
                          <br /> Created by <b>Admin</b> & Assigned to{" "}
                          <b>Nidhi</b> .
                        </Typography>
                      }
                      secondary={
                        <Typography
                          className={classes.listSecondary}
                          variant="caption"
                        >
                          07 Mar 11:09
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <Avatar className={classes.avatar}>
                        <NoteIcon className={classes.icon} />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          className={classes.listPrimary}
                          variant=" body1"
                        >
                          Note added by <b>Admin</b>,
                          <br /> Upon scrolling, subhead...
                        </Typography>
                      }
                      secondary={
                        <Typography
                          className={classes.listSecondary}
                          variant="caption"
                        >
                          07 Mar 11:09
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <Avatar className={classes.avatar}>
                        <TicketIcon className={classes.icon} />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          className={classes.listPrimary}
                          variant=" body1"
                        >
                          TICKET Assigned to <b>Nidhi</b>
                          <br />
                          by <b>Admin</b>
                        </Typography>
                      }
                      secondary={
                        <Typography
                          className={classes.listSecondary}
                          variant="caption"
                        >
                          07 Mar 11:09
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <Avatar className={classes.avatar}>
                        <TicketIcon className={classes.icon} />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          className={classes.listPrimary}
                          variant=" body1"
                        >
                          TICKET Created by <b>Admin</b>
                        </Typography>
                      }
                      secondary={
                        <Typography
                          className={classes.listSecondary}
                          variant="caption"
                        >
                          07 Mar 11:09
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </TabContainer>
            )}
            {value === 1 && (
              <TabContainer>
                {" "}
                <List dense>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <Avatar className={classes.avatar}>
                        <NoteIcon className={classes.icon} />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          className={classes.listPrimary}
                          variant=" body1"
                        >
                          Upon scrolling, subheaders remain pinned to the top of
                          the screen until pushed off screen by the next
                          subheader.This feature is relying on the CSS sticky
                          positioning. Unfortunately it's not implemented by all
                          the browsers we are supporting.
                        </Typography>
                      }
                      secondary={
                        <Typography
                          className={classes.listSecondary}
                          variant="caption"
                        >
                          07 Mar 11:09
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </TabContainer>
            )}
            {value === 2 && (
              <TabContainer>
                {" "}
                <List dense>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <Avatar className={classes.avatar}>
                        <TasksIcon className={classes.icon} />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          className={classes.listPrimary}
                          variant="body1"
                        >
                          Task #1 'Change is services for port wise db
                          connection this is refer to dev team'
                          <br /> Created by <b>Admin</b> & Assigned to{" "}
                          <b>Nidhi</b> .
                        </Typography>
                      }
                      secondary={
                        <Typography
                          className={classes.listSecondary}
                          variant="caption"
                        >
                          07 Mar 11:09
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </TabContainer>
            )}
            {value === 3 && (
              <TabContainer>
                {" "}
                <List dense>
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <Avatar className={classes.avatar}>
                        <AttachIcon className={classes.icon} />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          className={classes.listPrimary}
                          variant="body1"
                        >
                          Attachment <b>info.txt </b> Added by <b>Admin</b>.
                        </Typography>
                      }
                      secondary={
                        <Typography
                          className={classes.listSecondary}
                          variant="caption"
                        >
                          02 Apr 05:59
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </TabContainer>
            )}
          </Paper>
        </Grid>
        <br />
        <br />
      </div>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
