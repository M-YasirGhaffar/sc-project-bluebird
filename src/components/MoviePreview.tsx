import { motion } from "framer-motion";
import Link from "next/link";
import type MovieDB from "node-themoviedb";
import ImageWithFallback from "./ImageWithFallback";

/**
 * MoviePreview Component
 *
 * This component represents a preview of a movie, including an image and title.
 *
 * @param {Object} props - The properties of the component.
 * @param {MovieDB.Responses.Movie.GetDetails} props.movie - The details of the movie to be displayed.
 * 
 * @returns {React.Component} - The rendered MoviePreview component.
 */
function MoviePreview({
  movie,
}: {
  movie: MovieDB.Responses.Movie.GetDetails;
}) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group flex h-64 w-32 transform cursor-pointer flex-col items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
      data-testid={`movie-item-test`}
    >
      <motion.div className="h-3/4 w-full" layoutId={`image:${movie.id}`}>
        <ImageWithFallback
          unoptimized
          height={640}
          width={320}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          blurDataURL=""
          className="wifull h-full rounded-md object-cover shadow-md"
        />
      </motion.div>
      <motion.p
        layoutId={`title:${movie.id}`}
        className="mt-2 w-28 truncate text-center text-sm underline-offset-2 group-hover:underline"
      >
        {movie.title}
      </motion.p>
    </Link>
  );
}

export default MoviePreview;

/**
 * MoviePreviewSkeleton Component
 *
 * This component provides a skeleton loading state for the MoviePreview component.
 * It is used to indicate a loading state while fetching movie details.
 *
 * @returns {React.Component} - The rendered MoviePreviewSkeleton component.
 */
export function MoviePreviewSkeleton() {
  return (
    <div className="border-1 h-64  min-h-[60px] w-32 animate-pulse rounded-xl border-gray-400 bg-gray-400/50 p-2  px-4 py-3 shadow" />
  );
}
