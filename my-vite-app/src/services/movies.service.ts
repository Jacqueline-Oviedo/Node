import type { Movie } from "../models/movie.models";

const MOVIE_URL = "/data/movie.json";

export async function getMovie(): Promise<Movie[]> {
  const response = await fetch(MOVIE_URL);

  if (!response.ok) {
    throw new Error("No se puede cargar");
  }

  const data = await response.json();
  console.log("Peliculas cargadas", data);

  return data as Movie[];
}

export async function getMovieById(id: string): Promise<Movie | null> {
  const movies = await getMovie();

  const found = movies.find(
    (m) => String(m.id) === String(id)
  );

  return found ?? null;
}

