export const fetchMovies = (value) => {
    return fetch("http://www.omdbapi.com/?apikey=daf4f379&s=" + value, {

    })
    .then(handleErrors)
    .then(response => response.json()
    .then(response => {
        console.log("respone", response);
        return response
    }))

}

export const fetchMovieWiki = (movie) => {
    return fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + movie.split(" ").join("_"), {

    })
    .then(handleErrors)
    .then(response => response.json()
    .then(response => {
        console.log("wiki respone", response);
        return response
    }))
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}