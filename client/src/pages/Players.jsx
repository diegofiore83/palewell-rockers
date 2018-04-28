import React, { Component } from 'react';
import { func, bool, arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { getPlayers } from '../actions/resource/resourceActions';
import Player from "../components/Player";
import { playerType } from '../types';

class Players extends Component {
    componentDidMount() {
        this.props.getPlayers();
    }

    render() {
        const { isLoading, players } = this.props;

        const playersOutput = players.map(player => (
            <Player key={player.shortname} playerData={player}></Player>
        ));

        const output = isLoading ? 
            <div>LOADING...</div> : 
            <div className="players-page-list">{playersOutput}</div>;

        return (
            <div className="players-page">
                <h2>Players</h2>
                {output}
            </div>
        );
    }
}

Players.propTypes = {
    getPlayers: func.isRequired,
    isLoading: bool,
    players: arrayOf(playerType),
};

Players.defaultProps = {
    isLoading: false,
    players: [],
};

const mapStateToProps = state => ({
    players: state.resource.players,
    isLoading: state.resource.isLoading,
});

export default connect(mapStateToProps, {
    getPlayers,
})(Players);
