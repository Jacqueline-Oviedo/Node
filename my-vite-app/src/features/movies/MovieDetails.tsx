import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/movies.service";
import type { Movie } from "../../models/movie.models";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getMovieById(id)
      .then((movie) => setMovie(movie))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070B16] flex items-center justify-center">
        <p className="text-white text-lg animate-pulse">
          Cargando película...
        </p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#070B16] flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-bold mb-4">
          Película no encontrada
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070B16] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Poster */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={movie.posterUrl}
            alt={movie.tittle}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {movie.tittle}
          </h1>

          <div className="flex items-center gap-4 mb-6 text-gray-400">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.genre}</span>
            <span>•</span>
            <span>{movie.duration} min</span>
          </div>

          <div className="mb-6">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold">
              ⭐ {movie.rating.toFixed(1)}
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            {movie.description}
          </p>

          <p className="text-gray-400">
            <span className="font-semibold text-white">Director:</span>{" "}
            {movie.director}
          </p>
        </div>
      </div>
    </div>
  );
}

