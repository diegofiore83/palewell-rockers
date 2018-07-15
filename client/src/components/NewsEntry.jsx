import React from 'react';
import { newsType } from '../types';
import DateLabel from "../components/DateLabel";

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
                    <b>By:</b> {newsData.author} | <DateLabel date={newsData.createdDate}></DateLabel>
                </div>
            </div>
        );
    }
}

NewsEntry.propTypes = {
    newsData : newsType,
};

NewsEntry.defaultProps = {
    newsData: null
};

export default NewsEntry;
