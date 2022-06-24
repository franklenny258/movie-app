import './App.css'
import { Navbar } from './components/navbar/Navbar';
import { DEFAULT_MENU_ITEMS } from '../src/components/navbar/tabs/navbar-tabs';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Movies } from './components/movies/Movies';
import { AppRouting } from './enums/app-routing'
import { Favorites } from './components/favorites/Favorites';
import { MoviesDiscover } from './components/discover/Discover';
import { Footer } from './components/footer/Footer';
import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';
import { MessageService } from './services/message-service';
import { GenreService } from './services/genres-service';
import { useInjection } from './hooks/use-injection';
import { updateGenres } from './store/genre-slice';
import { useDispatch } from 'react-redux';

function App() {
  const messageService = useInjection(MessageService);
  const genreService = useInjection(GenreService);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const toast = useRef<Toast>(null);

  useEffect(() => {
    genreService.getMoviesGenres().then(response => {
      dispatch(updateGenres(response.genres));
    });
    messageService.setToastRef(toast);
  }, []);

  return (
    <div className="app">
      <div className="app-navbar">
        <Navbar menuItems={DEFAULT_MENU_ITEMS({navigate, location})}/>
      </div>
      <div className="app-content">
        <Routes>
          <Route path={AppRouting.DEFAULT} element={<Navigate to={AppRouting.MOVIES} />} />
          <Route path={AppRouting.MOVIES} element={<Movies />} />
          <Route path={AppRouting.MOVIES_FAVORITES} element={<Favorites />} />
          <Route path={AppRouting.MOVIES_DISCOVER} element={<MoviesDiscover />} />
          <Route path={AppRouting.WIDLCARD} element={<Navigate to={AppRouting.MOVIES} />}/>
        </Routes>
      </div>      
      <Footer />
      <Toast ref={toast} />
    </div>
  );
}

export default App
