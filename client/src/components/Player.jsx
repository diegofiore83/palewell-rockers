import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { CardContent, CardActions, Collapse, IconButton, Typography, Tooltip, CardMedia, CardHeader,Card } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { playerType } from '../types';
import { endpoints } from '../config/endpoints';
import { countryCodes } from '../config/country-codes';

const styles = theme => ({
    card: {
      width: 270,
      margin: 10
    },
    media: {
      height: 0,
      paddingTop: 340
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
      transform: "rotate(180deg)"
    }
});

class Player extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };

    formatDateOfBirth(date) {
      let isDefaultDate = date === '1900-01-01T00:00:00';
      if(isDefaultDate) {
          return 'Unknown';
      }

      const dateObj = new Date(date);
      let month = dateObj.getMonth() + 1;
      let day = (dateObj.getDate() < 10 ? '0' : '') + dateObj.getDate();
      return `${day}/${(month < 10 ? '0' : '') + month}/${dateObj.getFullYear()}`; 
    };

    render() {
      const { classes, playerData } = this.props;

      let bottomSection = <IconButton/>;

      if (playerData.description && playerData.description.length) {
          bottomSection = 
              <Tooltip title="Expand" placement="right">
                <IconButton
                    className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Expand"
                    >
                    <ExpandMoreIcon />
                </IconButton>
              </Tooltip>;
      }

      return (
        <div>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                  <div title={playerData.nationality} className={classnames('flag', countryCodes[playerData.nationality])}></div>
              }
              title={playerData.fullname}
              subheader={this.formatDateOfBirth(playerData.dateOfBirth)}
            />
            <CardMedia
              className={classes.media}
              image={`${endpoints.assets}/players/${playerData.shortname}.jpg`}
            />
            <CardContent>
              <Typography component="p">
                  <b>Position:</b> {playerData.position}  
              </Typography>
              <Typography component="p">
              <b>Favourite Team:</b> {playerData.favouriteTeam}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              {bottomSection}
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {playerData.description}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      );
    }
}

Player.propTypes = {
    playerData : playerType,
    classes: PropTypes.object.isRequired
};

Player.defaultProps = {
    playerData: null,
    classes: null
};

export default withStyles(styles)(Player);
