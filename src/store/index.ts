import { configureStore } from '@reduxjs/toolkit';
import favoriteMoviesReducer from './favorite-movies-slice';
import genresReducer from './genre-slice';
import selectedMovieReducer from './selected-movie-slice'

const store = configureStore({
    reducer: {
    genres: genresReducer,
    favoriteMovies: favoriteMoviesReducer,
    selectedMovie: selectedMovieReducer
  }
});

export type AppState = ReturnType<typeof store.getState>;
export default store;