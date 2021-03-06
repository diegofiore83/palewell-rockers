import React, { Component } from 'react';
import { func, bool, arrayOf, object } from 'prop-types';
import { ListItemText, ListItem, List, Avatar } from '@material-ui/core';
import { getFixtures } from '../actions/resource/resourceActions';
import { fixtureType } from '../types';
import { connect } from 'react-redux';
import DateLabel from "../components/DateLabel";
import { withStyles } from '@material-ui/core/styles';
import { red, green, yellow } from '@material-ui/core/colors';
import compose from 'recompose/compose';
import Loader from "../components/Loader";

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    fixtureL: {
        backgroundColor: red[500],
    },
    fixtureW: {
        backgroundColor: green[500],
    },
    fixtureD: {
        backgroundColor: yellow[500],
    }
});

class Fixtures extends Component {
    componentDidMount() {
        this.props.getFixtures();
    }

    buildMatchInfo(fixture) {
        let homeTeam = fixture.homeMatch ? 'Palewell Rockers' : fixture.opponent;
        let awayTeam = fixture.homeMatch ? fixture.opponent : 'Palewell Rockers';
        let dateAndLocation = 
            <div>
                 <b>{fixture.location}</b><span> | </span>  
                 <DateLabel date={fixture.date}/>
            </div>;
        return <ListItemText primary={`${homeTeam} ${fixture.result} ${awayTeam}`} secondary={dateAndLocation} />;
    }

    render() {
        const { isLoading, fixtures, classes } = this.props;

        const fixturesOutput = fixtures.map(fixture => (
            <ListItem  key={fixture.id}>
                <Avatar className={classes[`fixture${fixture.resultType}`]}>{fixture.resultType}</Avatar>
                {this.buildMatchInfo(fixture)}
            </ListItem>
        ));

        const output = isLoading ? 
            <Loader/> : 
            <List>
                {fixturesOutput}
            </List>;

        return (
            <div className={classes.root}>
              {output}
            </div>
          );
    }
}

Fixtures.propTypes = {
    getFixtures: func.isRequired,
    isLoading: bool,
    classes: object.isRequired,
    fixtures: arrayOf(fixtureType),
};

Fixtures.defaultProps = {
    isLoading: false,
    fixtures: [],
    classes: null,
};

const mapStateToProps = state => ({
    fixtures: state.resource.fixtures,
    isLoading: state.resource.isLoading,
});

export default compose(
    withStyles(styles),
    connect(mapStateToProps, {
        getFixtures,
    }),
  )(Fixtures);