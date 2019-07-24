import { Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { compose } from 'recompose';

const styles = (theme) => ({
    searchText: {
        borderBottom: '4px dotted' + theme.typography.h1.color,
        marginRight: '1rem'
    },
    root: {
        position: 'absolute',
        top: '30%',
        left: '30%'
    }
})

function Blank({ classes }) {
    return (
        <div className={classes.root}>
            <>
                <Typography variant='h1' inline>
                    Search some Movies
                </Typography>
            </>
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.entities.loading
});

export default compose(
    withStyles(styles),
)(Blank);