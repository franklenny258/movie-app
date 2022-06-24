import { useDispatch, useSelector } from "react-redux";
import { useInjection } from '../../hooks/use-injection';
import { Movie } from '../../models/movies';
import { MessageService } from "../../services/message-service";
import { EmptyListComponent } from "../empty-list/EmptyList";
import { AppState } from "../../store";
import { updateSelectedMovie } from "../../store/selected-movie-slice";
import { toggleFavorite } from "../../helpers/movies-helpers";
import { MoviesDetails } from "../movies/moviesDetails/MoviesDetails";
import { MoviePosterCard } from "../movies/moviesCard/MoviesPosterCard";
import './Favorites.css';

export function Favorites() {
  const favoriteMovies = useSelector((state: AppState) => state.favoriteMovies);
  const selectedMovie = useSelector((state: AppState) => state.selectedMovie.selectedMovie);
  const movieDetailsVisible = useSelector((state: AppState) => state.selectedMovie.detailsVivible);
  const messageService = useInjection(MessageService);
  const dispatch = useDispatch();

  const openMovieDetails = (movie: Movie) => {
    dispatch(updateSelectedMovie(movie));
  }

  const closeMovieDetails = (value: boolean) => {
    dispatch(updateSelectedMovie({}));
  }

  return (
    <div className="movies">
      <div className="container">
        <span className="block mt-6"></span>
        <h1 className='text-white font-medium text-3xl mb-1'>Favorite Movies</h1>
        <div className="flex flex-wrap -mx-5">
          {
            favoriteMovies.length === 0 ? (
              <EmptyListComponent header="Empty List" text="The favorite list of movies is empty" />
            ) : (
              favoriteMovies.map((favorite, index) => {
                return (
                  <div key={index} className='favorite-item'>
                    <MoviePosterCard
                      isFavorite={true}
                      onFavoriteButtonClick={(movie, value) =>
                        toggleFavorite(movie, value, dispatch, messageService)
                      }
                      onClick={(e) => openMovieDetails(e)}
                      movie={favorite}
                    />
                  </div>
                );
              })
            )
          }
        </div>
      </div>
      {Object.keys(selectedMovie).length > 0 ? (
        <MoviesDetails
          movie={selectedMovie}
          visible={movieDetailsVisible}
          onHide={(visible) => closeMovieDetails(visible)}
        />
      ) : null}
    </div>
  )
}