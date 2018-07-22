import React, { Component } from 'react';
import { arrayOf, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { getMatchReports } from '../actions/resource/resourceActions';
import { newsType } from '../types';
import NewsEntry from "../components/NewsEntry";
import { Typography } from '@material-ui/core';
import Loader from "../components/Loader";

class News extends Component {
    componentDidMount() {
        this.props.getMatchReports();
    }

    render() {
        const { isLoading, reports } = this.props;

        const newsOutput = reports.map(reportEntry => (
            <NewsEntry key={reportEntry.id} newsData={reportEntry}></NewsEntry>
        ));

        const output = isLoading ? 
            <Loader/> :
            <div className="news-page-list">{newsOutput}</div> ;

        return (
            <div className="app">
                <Typography variant="headline" component="h2">
                    Match Reports
                </Typography>
                {output}
            </div>
        );
    }
}

News.propTypes = {
    getMatchReports: func.isRequired,
    isLoading: bool,
    reports: arrayOf(newsType),
};

News.defaultProps = {
    isLoading: false,
    reports: [],
};

const mapStateToProps = state => ({
    reports: state.resource.reports,
    isLoading: state.resource.isLoading,
});

export default connect(mapStateToProps, {
    getMatchReports,
})(News);
