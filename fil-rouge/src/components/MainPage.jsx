import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Header } from './Header';
import { Footer } from './Footer';


function MainPage(props) {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLogout = () => {
        navigate('/loginpage');
    };

    return (
        <div className={`relative min-h-screen flex`}>
            <Header/>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center">
                <p className='text-4xl '>Espace utilisateur</p>
                <p> Bienvenue sur votre espace utilisateur !</p>
                <p>Ici vous pourrez retrouver tous vos anciens trajets</p>
                <button onClick={handleLogout} className=" bg-blue-500 text-white mt-12 py-2 px-12 rounded-md hover:bg-blue-300">
                    Déconnexion
                </button>
            </div>
            <Footer/>
        </div>
    );
}

export default MainPage;