import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjection } from '../../hooks/use-injection';
import { Movie } from '../../models/movies';
import { MovieService } from '../../services/movies-service';
import { AppState } from '../../store';
import { updateSelectedMovie } from '../../store/selected-movie-slice';
import { MoviesCarousel } from './moviesCarousel/MoviesCarousel';
import { MoviesDetails } from './moviesDetails/MoviesDetails';

export function Movies() {
  const movieService = useInjection(MovieService);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const selectedMovie = useSelector((state: AppState) => state.selectedMovie.selectedMovie);
  const movieDetailsVisible = useSelector((state: AppState) => state.selectedMovie.detailsVivible);
  const dispatch = useDispatch();

  const openMovieDetails = (movie: Movie) => {
    dispatch(updateSelectedMovie(movie));
  }

  const closeMovieDetails = (value: boolean) => {
    dispatch(updateSelectedMovie({}));
  }

  useEffect(() => {
    movieService.getPopularMovies().then((response) => {
      setPopularMovies(response.results);
    });
    movieService.getTopRatedMovies().then(response => {
      setTopRatedMovies(response.results);
    });
    movieService.getUpcomingMovies().then(response => {
      setUpcomingMovies(response.results);
    });
    movieService.getNowPlaying().then(response => {
      setNowPlayingMovies(response.results);
    });
  }, []);

  return (
    <div className='movies pt-4'>
      <div className='container'>
        <MoviesCarousel
          onMoviePostClick={(e) => openMovieDetails(e)}
          header='Now Playing Movies'
          movies={nowPlayingMovies}
          />
        <br />
        <MoviesCarousel
          onMoviePostClick={(e) => openMovieDetails(e)}
          header='Upconming Movies'
          movies={upcomingMovies}
        />
        <br />
        <MoviesCarousel
          onMoviePostClick={(e) => openMovieDetails(e)}
          header='Popular Movies'
          movies={popularMovies}
        />
        <br />
        <MoviesCarousel
          onMoviePostClick={(e) => openMovieDetails(e)}
          header='Top Rated Movies'
          movies={topRatedMovies}
        />
        <br /><br />
      </div>
      {Object.keys(selectedMovie).length > 0  ? (
        <MoviesDetails
          movie={selectedMovie}
          visible={movieDetailsVisible}
          onHide={(visible) => closeMovieDetails(visible)}
        />
      ) : null}
    </div>
  );
}
