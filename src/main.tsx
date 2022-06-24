import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reflect-metadata';

import App from './App'
import './index.css'

import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

import { InjectorContainerProvider } from './providers/ServiceProvider';
import servicesContainerInjector from './injector/service-injector';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { initializeInjection } from './injector/index';
initializeInjection();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <InjectorContainerProvider container={servicesContainerInjector}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InjectorContainerProvider>
    </Provider>
  </React.StrictMode>
)
