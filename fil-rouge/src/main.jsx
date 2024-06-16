import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App';
import { Map } from './components/pages/Map';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css'
//Le bootstrap était requis pour différentes raisons dans l'affichage de l'interface de connexion mais il a fait planter
//tout le CSS existant d'où son inutilisation. Il est cependant conservé à titre de trace de la construction du projet.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
