import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'recompose';
import SearchBar from './SearchBar';
import { fetchMovies, fetchMovieWiki } from '../Data/DataFetcher'
import {connect} from 'react-redux'
import {setMovies, setWiki} from '../Store/entitiesActions'
import { push } from 'connected-react-router';

const styles = theme => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    appBar: {
        minHeight: theme.spacing.unit * 5,
        backgroundColor: theme.palette.common.black
    },
    hide: {
        display: 'none',
    },
    content: {
        width: '100%',
    },
    searchPaper: {
        display: 'inline-flex',
        width: '100%'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        width: '80%',
    },
});

class CustomAppbar extends React.Component {
    state = {
        movies: [],
    }

    componentDidMount() {
        // this.searchIMDB("");
    }

    createOptions(movies) {
        const options = movies.map(m => ({
            label: m.Title,
            value: m.imdbID
        }))
        console.log(options);
        return options;
    }

    handleChange(obj, action){
        console.log(obj, action)
        switch(action.action){
            case "select-option":{
                console.log("selected", obj)
                fetchMovieWiki(obj.label).then(wiki => {
                    console.log("wiki", wiki);
                    this.dispatch(setWiki(wiki));
                    this.dispatch(push({
                        pathname: "/wiki"
                    }))
                })
            }
            default: return
        }
    }

    handleInputChange(value, action){
        if(value.length > 5){
            fetchMovies(value).then(movies => {
                console.log("movies", movies);
                this.dispatch(setMovies(movies));
            });
        }
    }

    render() {
        const { classes, movies = [], ...rest } = this.props;
        const { createOptions, handleChange, handleInputChange } = this;

        const children = React.Children.map(this.props.children, (child => {
            return React.cloneElement(child, { ...rest, ...this.state });
        }))

        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar>
                        <div className={classes.searchPaper}>
                            <SearchBar
                                options={createOptions(movies)}
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                {...rest}
                                movies={movies}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                <main className={classes.content}>
                    <div className={classes.header} />
                    {children}
                </main>
            </div>
        );
    }
}

CustomAppbar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    movies: state.entities.movies,
  });

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, null)
)(CustomAppbar);