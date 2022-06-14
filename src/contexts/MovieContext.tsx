import { createContext, ReactNode, useEffect, useState } from "react";
import api, { key } from "../services/api";
import { saveMovie } from "../services/storeMovies";

interface MovieContextData {
  movies: MovieProps[];
  addFavoriteMovie: (id: string) => void;
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
    } catch {
      console.log("Algo deu errado. Sinto muito!");

      return;
    }
  }

  async function addFavoriteMovie(id: string) {
    const response = await api.get(`/movie/${id}?api_key=${key}`);

    saveMovie("@MovieStore", response.data);
  }

  return (
    <MovieContext.Provider value={{ movies, addFavoriteMovie }}>
      {children}
    </MovieContext.Provider>
  );
}
