import {
  SET_MOVIES,
  SET_WIKI,
  SET_MOVIE_DETAIL
} from './entitiesActions';

const initialState = {
  movies: [],
  wiki: null,
  movieDetail: null,
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.params.results,
      };

    case SET_WIKI:
        return {
          ...state,
          wiki: action.params,
        };
    
    case SET_MOVIE_DETAIL:
        return {
          ...state,
          movieDetail: action.params
        }

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}