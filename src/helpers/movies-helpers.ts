import { BaseApiUrls } from '../enums/api-urls';
import { Movie } from '../models/movies';
import { Genre } from '../models/genre';
import { PosterCardSize } from '../enums/poster-card-size';
import { Dispatch } from "@reduxjs/toolkit";
import { MessageService } from '../services/message-service';
import { addFavoriteMovie, removeFavoriteMovie } from '../store/favorite-movies-slice';

export function getPosterURL(movie: Movie, posterCardSize?: PosterCardSize) {
  const base = BaseApiUrls.MOVIE_POSTER_API_URL;
  const size = posterCardSize ? posterCardSize : PosterCardSize.W500;
  return base.concat(size, movie.poster_path ?? '');
}

export function isInFavorites(target: Movie, source: Movie[]) {
  return source.filter(x => x.id === target.id).length > 0;
}

export function toggleFavorite(
  movie: Movie,
  value: boolean,
  dispatch: Dispatch,
  messageService: MessageService
) {
  if (value) {
    dispatch(addFavoriteMovie(movie));
    messageService.show({
      severity: 'success',
      summary: 'Favorites',
      detail: 'Added to favorites',
    });
  } else {
    dispatch(removeFavoriteMovie(movie));
    messageService.show({
      severity: 'info',
      summary: 'Favorites',
      detail: 'Removed from favorites',
    });
  }
}

export function getGenres(ids: number[], data: Genre[]) {
  return [...new Set(data.filter(x => ids.includes(x.id)).map(y => y.name))];
}

export function resetBodyOverflow() {
  document.body.classList.toggle('p-overflow-hidden');
}