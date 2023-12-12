import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'animate.css';
import './dist/css/main.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import ScrollToTop from './components/ScrollToTop.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <ScrollToTop />
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
