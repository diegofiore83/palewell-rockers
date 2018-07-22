import React, { Component } from 'react';
import { func, bool, arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { getPlayers } from '../actions/resource/resourceActions';
import Player from "../components/Player";
import { playerType } from '../types';
import { Typography, Grid } from '@material-ui/core';
import Loader from "../components/Loader";
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Players extends Component {
    componentDidMount() {
        this.props.getPlayers();
    }

    render() {
        const { isLoading, players, classes } = this.props;

        const playersOutput = players.map(player => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={player.shortname} >
                <Player playerData={player}></Player>
            </Grid>
        ));
        
        const output = isLoading ? 
            <Loader/> : 
            <Grid container spacing={24}>
                {playersOutput}
            </Grid>;

        return (
            <div>  
               <Typography variant="headline" component="h2">
                    Players
                </Typography>
                <div className={classes.root}>
                    {output}
                </div>
            </div>
        );
    }
}

Players.propTypes = {
    getPlayers: func.isRequired,
    isLoading: bool,
    classes: object.isRequired,
    players: arrayOf(playerType),
};

Players.defaultProps = {
    isLoading: false,
    players: [],
    classes: null,
};

const mapStateToProps = state => ({
    players: state.resource.players,
    isLoading: state.resource.isLoading,
});

export default compose(
    withStyles(styles),
    connect(mapStateToProps, {
        getPlayers,
    }),
  )(Players);
