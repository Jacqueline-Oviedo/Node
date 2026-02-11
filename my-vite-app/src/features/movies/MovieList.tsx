import type { Movie } from "../../models/movie.models";
import MovieCard from "./MovieCard";

export default function MoviesList({ movies }: { movies: Movie[] }) {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        gap-6
      ">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}
