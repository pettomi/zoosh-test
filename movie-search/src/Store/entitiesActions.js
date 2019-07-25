export const SET_MOVIES = "setMovies"
export const SET_WIKI = "setWiki"
export const SET_MOVIE_DETAIL = "setMovieDetail"

export const setMovies = (params) => ({
  type: SET_MOVIES,
  params: params
});

export const setWiki = (params) => ({
  type: SET_WIKI,
  params: params
});

export const setMovieDetail = (params) => ({
  type: SET_MOVIE_DETAIL,
  params: params
})
