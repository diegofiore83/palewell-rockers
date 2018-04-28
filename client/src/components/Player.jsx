import React from 'react';
import { playerType } from '../types';
import classNames from 'classnames';
import { endpoints } from '../config/endpoints';

class Player extends React.Component {
    render() {
        const { playerData } = this.props;

        return (
            <div className="player-card">
                <div title={playerData.nationality} className={classNames('flag', this.getCountryCode(playerData.nationality))}></div>
                <div className="player-card-name">
                    {playerData.fullname}
                </div>
                <object className="player-card-picture" data={this.buildImageUrl(playerData.shortname)} type="image/jpg">
                    <img  className="player-card-picture" alt="" src={this.buildImageUrl('no-picture')}/>
                </object>
                <div>
                    <b>Born:</b> {this.formatDateOfBirth(playerData.dateOfBirth)}
                </div>
                <div>
                    <b>Position:</b> {playerData.position}
                </div>
                <div>
                    <b>Favourite Team:</b> {playerData.favouriteTeam}
                </div>
                <div className="player-card-description">
                    {playerData.description}
                </div>
            </div>
        );
    }

    buildImageUrl(shortname) {
        return `${endpoints.assets}/players/${shortname}.jpg`;
    }

    formatDateOfBirth(dateOfBirth) {
        const dateObj = new Date(dateOfBirth);
        return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`; 
    }

    //TODO: Save country code in DB and delete this function
    getCountryCode(nationality) {
        switch(nationality) {
            case "Portuguese":
                return "pt";
            case "Italian":
                return "it";
            case "South African":
                return "za";
            default:
                return "gb";
        }
    }
}

Player.propTypes = {
    playerData : playerType,
};

Player.defaultProps = {
    playerData: null
};

export default Player;
