import {
  SET_MOVIES,
  SET_WIKI
} from './entitiesActions';

const initialState = {
  movies: [],
  wiki: null,
};

export default function movies(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        movies: action.params.Search,
      };

    case SET_WIKI:
      console.log("reducer wiki", action.params)
        return {
          wiki: action.params,
        };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}