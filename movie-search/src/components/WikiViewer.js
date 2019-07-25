import { Typography, withStyles } from '@material-ui/core'
import { default as React, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import MovieCard from './MovieCard'
import { fetchSimilarMovies, fetchMovieWiki } from '../Data/DataFetcher';
import { setWiki } from '../Store/entitiesActions';

const styles = theme => ({
  root: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    backgroundColor: theme.palette.background.paper,
  },
});

function WikiViewer(props) {
  const [similarMovies, setSimilarMovies] = useState(null);
  const { wiki, movieDetail, dispatch } = props;
  const { classes, ...rest } = props

  const getSimilarMovies = () => {
    setSimilarMoviesState(movieDetail.id);
  }

  const handleClick = (movie) => {
    fetchMovieWiki(movie.title).then(wiki => {
      dispatch(setWiki(wiki));
    })
    setSimilarMoviesState(movie.id);
  }

  const setSimilarMoviesState= (id) => {
    fetchSimilarMovies(id).then(similarMovies => {
      setSimilarMovies(similarMovies.results);
    })
  }

  return (
    <div className={classes.root}>
      {wiki && movieDetail &&
        <MovieCard
          onExpand={getSimilarMovies}
          similarMovies={similarMovies}
          onClick={handleClick}
          {...rest}
        />
      }
    </div>
  );
}

const mapStateToProps = state => ({
  wiki: state.entities.wiki,
  movieDetail: state.entities.movieDetail
});


export default compose(
  withStyles(styles),
  connect(mapStateToProps, null)
)(WikiViewer);