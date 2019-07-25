import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { compose } from 'recompose';

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        minWidth: theme.mixins.searchbar.width,
        marginRight: theme.spacing.unit * 6,
        marginLeft: "4rem"
    },
    input: {
        marginLeft: 8,
        flex: 1,
        ...theme.typography.h3,
    },
    iconButton: {
        padding: 0,
        marginLeft: '4px',
        minWidth: 0,
        minHeight: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    filledIcon: {
        padding: theme.spacing.unit,
        background: 'rgba(0, 0, 0, 0.22)'
    }
});

const customStyles = {
    control: () => ({
        width: 400,
        display: "flex"
    }),
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted black',
        color: state.isSelected ? 'white' : "#0361af",
        padding: 20,
    }),
}

function CustomizedInputBase(props) {
    const { classes, options, onChange, onInputChange, dispatch, movies } = props;

    return (
        <Paper className={classes.root} elevation={1}>
            <Button className={classes.iconButton} aria-label="Search">
                <SearchIcon color='secondary' />
            </Button>
            <Select
                options={options}
                placeholder="Search IMDb"
                styles={customStyles}
                onChange={onChange}
                onInputChange={onInputChange}
                dispatch={dispatch}
            />
        </Paper>
    );
}

CustomizedInputBase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles)
)(CustomizedInputBase);