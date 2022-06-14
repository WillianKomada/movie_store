import { createContext, ReactNode, useEffect, useState } from "react";
import api, { key } from "../services/api";

interface MovieContextData {
  movies: MovieProps[];
  addFavoriteMovie: (id: string) => void;
  removeFavoriteMovie: (id: string) => void;
}

interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
  favoriteMovie: boolean;
}

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext({} as MovieContextData);

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    try {
      const response = await api.get(`/movie/popular?api_key=${key}`);

      setMovies(response.data.results);
      console.log(response.data.results);
    } catch {
      console.log("Algo deu errado. Sinto muito!");

      return;
    }
  }

  function addFavoriteMovie(id: string) {
    const movieFavorite = movies.map((movie) => {
      return movie.id === id ? { ...movie, favoriteMovie: true } : movie;
    });

    setMovies(movieFavorite);
  }

  function removeFavoriteMovie(id: string) {
    const movieFavorite = movies.map((movie) => {
      return movie.id === id ? { ...movie, favoriteMovie: false } : movie;
    });

    setMovies(movieFavorite);
  }

  return (
    <MovieContext.Provider
      value={{ movies, addFavoriteMovie, removeFavoriteMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
}
