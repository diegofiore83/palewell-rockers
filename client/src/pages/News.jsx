import React, { Component } from 'react';
import { arrayOf, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { getNews } from '../actions/resource/resourceActions';
import { newsType } from '../types';
import NewsEntry from "../components/NewsEntry";
import { Typography } from '@material-ui/core';

class News extends Component {
    componentDidMount() {
        this.props.getNews();
    }

    render() {
        const { isLoading, news } = this.props;

        const newsOutput = news.map(newsEntry => (
            <NewsEntry key={newsEntry.id} newsData={newsEntry}></NewsEntry>
        ));

        const output = isLoading ? 
            <div>LOADING...</div> :
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
    getNews: func.isRequired,
    isLoading: bool,
    news: arrayOf(newsType),
};

News.defaultProps = {
    isLoading: false,
    news: [],
};

const mapStateToProps = state => ({
    news: state.resource.news,
    isLoading: state.resource.isLoading,
});

export default connect(mapStateToProps, {
    getNews,
})(News);
