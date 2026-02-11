import { useEffect, useState } from "react";
import type { Movie } from "../../models/movie.models";
import MovieList from "./MovieList";
import { getMovie } from "../../services/movies.service";

export default function Movies() {
  const [movies, setMovie] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovie()
      .then(setMovie)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070B16] flex items-center justify-center">
        <p className="text-white text-lg animate-pulse">
          Cargando películas...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070B16] px-6 py-10">
      <h1 className="text-3xl font-bold text-white mb-8">
        Películas
      </h1>

      <MovieList movies={movies} />
    </div>
  );
}
