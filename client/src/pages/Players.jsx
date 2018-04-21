import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlayers } from '../actions/resource/resourceActions';
import logo from '../logo.svg';
import '../App.css';

class Players extends Component {
    componentDidMount() {
        this.props.getPlayers();
    }

    render() {
        const { isLoading, players } = this.props;

        const playersOutput = players.map(player => (
            <li key={player.shortname}>{player.fullname}</li>
        ));

        const output = isLoading ? (
            <img src={logo} className="App-logo" alt="logo" />
        ) : (
            playersOutput
        );

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Players</h2>
                </div>
                {output}
            </div>
        );
    }
}

Players.propTypes = {
    getPlayers: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    players: PropTypes.arrayOf(
        PropTypes.shape({
            dateOfBirth: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            favouriteTeam: PropTypes.string.isRequired,
            fullname: PropTypes.string.isRequired,
            nationality: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            shortname: PropTypes.string.isRequired,
        })
    ),
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
