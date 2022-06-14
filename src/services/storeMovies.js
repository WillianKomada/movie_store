export async function getMoviesSave(key) {
  const myMovies = await localStorage.getItem(key);

  let moviesSaves = JSON.parse(myMovies) || [];

  return moviesSaves;
}

export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key);

  const hasMovie = moviesStored.some((movie) => movie.id === newMovie.id);

  if (hasMovie) {
    return;
  }

  moviesStored.push(newMovie);

  await localStorage.setItem(key, JSON.stringify(moviesStored));
}

export async function removeMovie(moviesStored, id) {
  let myMoviesStored = moviesStored.filter((item) => {
    return item.id !== id;
  });

  await localStorage.setItem("@MovieStore", JSON.stringify(myMoviesStored));

  return myMoviesStored;
}

export async function removeCartMovie(moviesStored, id) {
  let myMoviesStored = moviesStored.filter((item) => {
    return item.id !== id;
  });

  await localStorage.setItem("@MovieCartStore", JSON.stringify(myMoviesStored));

  return myMoviesStored;
}
