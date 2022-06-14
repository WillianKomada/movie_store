import { createContext, ReactNode, useEffect, useState } from "react";
import api, { key } from "../services/api";
import {
  getMoviesSave,
  removeCartMovie,
  removeMovie,
  saveMovie,
} from "../services/storeMovies";

interface MovieContextData {
  movies: MovieProps[];
  myMovies: MovieProps[];
  myCartMovies: MovieProps[];
  addFavoriteMovie: (id: string) => void;
  AddMovieToCart: (id: string) => void;
  handleDeleteMovie: (id: string) => void;
  handleDeleteCartMovie: (id: string) => void;
  handleClearMovieStorage: () => void;
  handleClearMovieCartStorage: () => void;
}

interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
}

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext({} as MovieContextData);

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [myMovies, setMyMovies] = useState<MovieProps[]>([]);
  const [myCartMovies, setMyCartMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    loadMovies();
    loadImagesMovies();
  }, []);

  useEffect(() => {
    async function getMovies() {
      const resultMovieStore = await getMoviesSave("@MovieStore");
      const resultMovieCartStore = await getMoviesSave("@MovieCartStore");

      setMyMovies(resultMovieStore);
      setMyCartMovies(resultMovieCartStore);
    }

    getMovies();
  }, [myMovies, myCartMovies]);

  async function loadMovies() {
    try {
      const response = await api.get(`/movie/popular?api_key=${key}`);

      setMovies(response.data.results);
    } catch {
      console.log("Algo deu errado. Sinto muito!");

      return;
    }
  }

  async function loadImagesMovies() {
    await api.get(`/configuration?api_key=${key}`);
  }

  async function addFavoriteMovie(id: string) {
    const response = await api.get(`/movie/${id}?api_key=${key}`);

    saveMovie("@MovieStore", response.data);
  }

  async function AddMovieToCart(id: string) {
    const response = await api.get(`/movie/${id}?api_key=${key}`);

    saveMovie("@MovieCartStore", response.data);
  }

  async function handleDeleteMovie(id: string) {
    await removeMovie(myMovies, id);
  }

  async function handleDeleteCartMovie(id: string) {
    await removeCartMovie(myCartMovies, id);
  }

  function handleClearMovieStorage() {
    localStorage.removeItem("@MovieStore");
  }

  function handleClearMovieCartStorage() {
    localStorage.removeItem("@MovieCartStore");
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        myMovies,
        myCartMovies,
        addFavoriteMovie,
        AddMovieToCart,
        handleDeleteMovie,
        handleDeleteCartMovie,
        handleClearMovieStorage,
        handleClearMovieCartStorage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
