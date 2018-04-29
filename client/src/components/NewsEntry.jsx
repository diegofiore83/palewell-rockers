import React from 'react';
import { newsType } from '../types';

class NewsEntry extends React.Component {
    render() {
        const { newsData } = this.props;

        return (
            <div className="news-card">
                <div className="news-card-title">
                    {newsData.title}
                </div>
                <div className="news-card-body">
                    {newsData.body}
                </div>
                <div className="news-card-metadata">
                    <b>By:</b> {newsData.author} | {this.formatCreatedDate(newsData.createdDate)}
                </div>
            </div>
        );
    }

    //TODO: Same logic as in the Players component. Updates results in the action already with the formatted date
    formatCreatedDate(createdDate) {
        const dateObj = new Date(createdDate);
        return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
    }
}

NewsEntry.propTypes = {
    newsData : newsType,
};

NewsEntry.defaultProps = {
    newsData: null
};

export default NewsEntry;
