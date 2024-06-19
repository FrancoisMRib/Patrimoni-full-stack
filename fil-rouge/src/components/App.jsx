//import { useState } from 'react'

// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Accueil } from "./pages/Accueil";
import { Itineraires } from "./pages/Itineraires";
import { Contact } from "./pages/Contact";
import { Jeux } from "./pages/Jeux";
import { Apropos } from "./pages/About";
import { Liens } from "./pages/Links";
import { Connexion } from "./pages/Connexion";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Register } from "./Register";
import { Login } from "./Login";
// import { Map } from './Map.jsx';
import React from 'react';
import { Options } from "./pages/Options";
import { PistGame } from "./pages/PistGame";
import { Quiz } from "./pages/Quiz";
//import {Carousel} from './pages/Carrousel'; // Importez le composant Carousel
import LoginPage from "./LoginPage.jsx";
import MainPage from "./MainPage.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Accueil/>
  },
  {
    path:"/loginpage",
    element: <LoginPage/>
  },
  {
    path:"/main",
    element: <MainPage/>
  },
  {
    path:"/itineraire",
    element: <Itineraires/>
  },
  {
    path:"/games",
    element: <Jeux/>
  },
  {
    path:"/contact",
    element: <Contact/>
  },
  {
    path:"/connexion",
    element: <Connexion/>
  },
  {
    path:"/about",
    element: <Apropos/>
  },
  {
    path:"/registration",
    element: <Register/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/options",
    element: <Options/>
  },
  {
    path:"/piste",
    element: <PistGame/>
  },
  {
    path:"/quiz",
    element: <Quiz/>
  },
  {
    path:"/links",
    element: <Liens/>
  }
])

export function App() {
  return (
    <div>

      <RouterProvider router={router} />

    </div>
    
    // <div className="App">
    //   <h1>Quiz Patrimoni</h1>
    //   <Carousel />
    //   <div className="propositions">
    //     <div style="background-color: #c17373;color: white;">Proposition 1</div>
    //     <div style="background-color: #c17373;color: white;">Proposition 2</div>
    //     <div style="background-color: #c17373;color: white;">Proposition 3</div>
    //   </div>
    // </div>
  );
}
