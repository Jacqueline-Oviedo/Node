import { Link } from "react-router-dom";
import type { Movie } from "../../models/movie.models";

type Props = { movie: Movie };

export default function MovieCard({ movie }: Props) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      className="group block bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <article className="relative">
        {/* Poster */}
        <div className="relative">
          <img
            src={movie.posterUrl}
            alt={movie.tittle}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay oscuro al hacer hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Rating */}
          <div className="absolute top-3 right-3 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full shadow">
            ⭐ {movie.rating.toFixed(1)}
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white truncate">
            {movie.tittle}
          </h3>
          <p className="text-sm text-gray-400">{movie.year}</p>
        </div>
      </article>
    </Link>
  );
}

