import React from 'react';
import './MovieList.scss';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ list }) => {
  return (
    <div className="movies" data-cy="movieList">
      {list.map(movie => (
        <MovieCard key={movie.imdbId} item={movie} />
      ))}
    </div>
  );
};
