import { Typography, withStyles } from '@material-ui/core'
import { default as React, useState} from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import MovieCard from './MovieCard'
import { fetchSimilarMovies } from '../Data/DataFetcher';

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
  const {wiki, movieDetail} = props;
  const {classes, ...rest} = props

  const getSimilarMovies = () => {
    fetchSimilarMovies(movieDetail.id).then(similar => {
      setSimilarMovies(similar.results)
    })
  }

  return (
    <div className={classes.root}>
        {wiki && movieDetail &&
          <MovieCard 
            onExpand={getSimilarMovies} 
            similarMovies={similarMovies} 
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