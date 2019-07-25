export const fetchMovies2 = (value) => {
    return fetch("http://www.omdbapi.com/?apikey=daf4f379&s=" + value, {

    })
    .then(handleErrors)
    .then(response => response.json()
    .then(response => {
        return response
    }))

}

export const fetchMovies = (value) => {
    return fetch("https://api.themoviedb.org/3/search/movie?api_key=b6433ee4713fd68892a9f01fb8584cef&query=" + value, {

    })
    .then(handleErrors)
    .then(response => response.json()
    .then(response => {
        return response
    }))

}

export const fetchMovieWiki = (movie) => {
    return fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + movie.split(" ").join("_"), {

    })
    .then(handleErrors)
    .then(response => response.json()
    .then(response => {
        return response
    }))
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchSimilarMovies = (movieId) => {
    return fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/similar?api_key=b6433ee4713fd68892a9f01fb8584cef", {

    })
    .then(handleErrors)
    .then(response => response.json()
    .then(response => {
        return response
    }))
}

export const fetchMovieDetails = (movieId) => {
    return fetch("https://api.themoviedb.org/3/movie/"+ movieId + "?api_key=b6433ee4713fd68892a9f01fb8584cef", {

    })
    .then(handleErrors)
    .then(response => response.json()
    .then(response => {
        return response
    }))
}