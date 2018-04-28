import React, { Component } from 'react';
import { arrayOf, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { getNews } from '../actions/resource/resourceActions';
import { newsType } from '../types';

class News extends Component {
    componentDidMount() {
        this.props.getNews();
    }

    render() {
        const { isLoading, news } = this.props;

        const newsOutput = news.map(newsEntry => (
            <div key={newsEntry.id}>
                <div>{newsEntry.title}</div>
                <div>{newsEntry.body}</div>
                <div>{newsEntry.createdDate}</div>
                <div>{newsEntry.author}</div>
            </div>
        ));

        const output = isLoading ? <div>LOADING...</div> : newsOutput;

        return (
            <div className="app">
                <h2>News</h2>
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
