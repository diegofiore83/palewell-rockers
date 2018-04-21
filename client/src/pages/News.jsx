import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNews } from '../actions/resource/resourceActions';
import logo from '../logo.svg';
import '../App.css';

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
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>News</h2>
                </div>
                {output}
            </div>
        );
    }
}

News.propTypes = {
    getNews: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    news: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            createdDate: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        })
    ),
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
