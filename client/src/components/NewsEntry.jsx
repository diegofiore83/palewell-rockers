import React from 'react';
import { newsType } from '../types';
import DateLabel from "../components/DateLabel";
import Parser from 'html-react-parser';
import { Paper, Typography } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { deepPurple } from '@material-ui/core/colors';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 3
    },
    newsTitle: {
        color: deepPurple['500'],
    },
    author: {
        marginTop: theme.spacing.unit,
        color: deepPurple['500'],
        textAlign: 'right',
    },
    author_icon: {
        color: deepPurple['500'],
        verticalAlign: 'middle'
    },
});

class NewsEntry extends React.Component {
    render() {;
        const { newsData, classes } = this.props;

        return (
            <Paper className={classes.root} elevation={23}>
                <Typography variant="headline" component="h3" className={classes.newsTitle}>
                    {newsData.title}
                </Typography>
                <Typography>
                    {Parser(newsData.body)}
                </Typography>
                <Typography variant="body1" className={classes.author}>
                    <Person className={classes.author_icon} /> 
                    {newsData.author} | <DateLabel date={newsData.createdDate}/>
                </Typography>
            </Paper>
        );
    }
}

NewsEntry.propTypes = {
    newsData : newsType,
    classes: PropTypes.object.isRequired,
};

NewsEntry.defaultProps = {
    newsData: null,
    classes: null
};

export default withStyles(styles)(NewsEntry);   