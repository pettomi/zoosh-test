import { withStyles } from '@material-ui/core';
import { default as React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fetchMovieWiki, fetchSimilarMovies, fetchMovieDetails } from '../Data/DataFetcher';
import { setWiki, setMovieDetail } from '../Store/entitiesActions';
import MovieCard from './MovieCard';
import { push } from 'connected-react-router'

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
  const { wiki, movieDetail, dispatch, search } = props;
  const { classes, ...rest } = props

  useEffect(() => {
    let params = new URLSearchParams(search);

    if (!search && movieDetail) {
      updateId(movieDetail.id);

    } else if (search) {
      const id = params.get("id");
      fetchMovieDetails(id).then(movie => {
        dispatch(setMovieDetail(movie))
        fetchMovieWiki(movie.title).then(wiki => {
          dispatch(setWiki(wiki));
        })
      })
    }
  }, [search]);

  const updateId = (id) => {
    let params = new URLSearchParams();
    params.append("id", id);
    dispatch(push({
      pathname: "wiki",
      search: params.toString()
    }))
  }

  const getSimilarMovies = () => {
    setSimilarMoviesState(movieDetail.id);
  }

  const handleClick = (movie) => {
    fetchMovieWiki(movie.title).then(wiki => {
      dispatch(setWiki(wiki));
    })
    setSimilarMoviesState(movie.id);
    updateId(movie.id);
  }

  const setSimilarMoviesState = (id) => {
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
  movieDetail: state.entities.movieDetail,
  search: state.router.location.search
});


export default compose(
  withStyles(styles),
  connect(mapStateToProps, null)
)(WikiViewer);