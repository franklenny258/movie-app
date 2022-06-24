import { initInjector } from './service-injector';
import { MessageService } from '../services/message-service';
import { MovieService } from '../services/movies-service';
import { GenreService } from '../services/genres-service';

const SERVICE_PROVIDERS = [
    MessageService,
    MovieService,
    GenreService
];

export function initializeInjection() {
  initInjector(SERVICE_PROVIDERS);
}