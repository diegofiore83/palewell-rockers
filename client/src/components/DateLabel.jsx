import React from 'react';

class DateLabel extends React.Component {
    render() {
        const { date } = this.props;

        return (
            <div className="date-label">
                {this.formatDate(date)}
            </div>
        );
    }

    formatDate(date) {
        const dateObj = new Date(date);
        let month = dateObj.getMonth() + 1;
        return `${dateObj.getDate()}/${(month < 10 ? '0' : '') + month}/${dateObj.getFullYear()}`; 
    }
}

DateLabel.propTypes = String;
DateLabel.defaultProps = '';

export default DateLabel;
