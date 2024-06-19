import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


export function Login() {

    // State variables for username, password, and error message
    const [name_user, setName_user] = useState('');
    const [first_name_user, setFirst_name_user] = useState('');
    const [email, setEmail] = useState('');
    const [password_user, setPassword_user] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Initialize useNavigate hook for navigation
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Clear previous error messages
            setErrorMessage('');

            // Send login request to server
            const response = await axios.post('http://localhost:3173/login', { email, password_user });

            // If login successful, redirect to MainPage
            if (response.status === 200) {
                navigate('/main');
            }
        } catch (error) {
            console.error('Error:', error);

            // If login failed, display error message
            setErrorMessage('Your Username and\nPassword are incorrect.');
        }
    };

    return (
        <div 
        // className="d-flex justify-content-center align-items-center bg-primary vh-100"
        >
            <div className="presentation">
            <div 
            // className="bg-white p-3 rounded w-25"
            >
                <h2>S'identifier</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email"><strong>Mail</strong></label>
                        <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Entrer votre email" name="email"
                        // className="form-control rounded-0"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"><strong>Mot de passe</strong></label>
                        <input 
                        type="password" 
                        value={password_user}
                        onChange={(e) => setPassword_user(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Entrer votre mot de passe" name="password"
                        // className="form-control rounded-0"
                        />
                    </div>
                    <button type="submit" 
                    // className="btn btn-success w-100 rounded-0"
                    >S'authentifier</button>
                    <p>Vous êtes en accord avec nos termes et nos politiques</p>
                    {errorMessage && <p className="text-red-500 text-sm whitespace-pre-line text-center mt-4 ">{errorMessage}</p>} 
                    {/* Affiche si besoin un message d'erreur */}
                    <Link to={`/registration`} 
                    // className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                    >Créer un compte</Link>
                </form>
            </div>
            </div>
        </div>
    )
}