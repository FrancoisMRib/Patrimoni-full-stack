// Import React and necessary hooks
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';

export function Registration(props) {
    // State variables for username, password, and error message
    const [name_user, setUsername] = useState('');
    const [first_name_user, setFirstusername] = useState('');
    const [email, setEmail] = useState('');
    const [password_user, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Initialize useNavigate hook for navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('test1');

    try {
      // Clear previous error messages
      setErrorMessage('');

      // Prepare registration data object
      const registrationData = {
        name_user,
        first_name_user,
        email,
        password_user, // You'll need to hash the password before sending it to the server (see server.js)
      };

      // Send registration request to server
      const response = await axios.post('http://localhost:3306/registration', registrationData);

      // If registration successful, redirect to login page or main page (depending on your logic)
      if (response.status === 200) { // Adjust status code based on server response
        navigate('/main'); // Or navigate to main page if registration automatically logs in
      }
    } catch (error) {
      console.error('Error:', error);
      // If registration failed, display error message
      setErrorMessage('An error occurred during registration.');
    }
  };

    // // Initialize useNavigate hook for navigation
    // const navigate = useNavigate();

    // // Function to handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log('test1');

    //     try {
    //         // Clear previous error messages
    //         setErrorMessage('');

    //         // Send login request to server
    //         const response = await axios.post('http://localhost:3000/loginpage', { name_user, password_user });

    //         // If login successful, redirect to MainPage
    //         if (response.status === 200) {
    //             navigate('/main');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);

    //         // If login failed, display error message
    //         setErrorMessage('Your Username and\nPassword are incorrect.');
    //     }
    // };

    // JSX structure for login form
    return (
        
        <div className="flex items-center justify-center min-h-screen">
            <Header/>
            <div className="mx-auto p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Enregistremification</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                        <label htmlFor="username" className="block mb-2">Prénom : </label>
                        <input
                            type="text"
                            id="name_user"
                            value={first_name_user}
                            onChange={(e) => setFirstusername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <br />
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2">Nom : </label>
                        <input
                            type="text"
                            id="first_name_user"
                            value={name_user}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <br />
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email : </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <br />
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">Mot de passe : </label>
                        <input
                            type="password"
                            id="password"
                            value={password_user}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <br />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
                    {errorMessage && <p className="text-red-500 text-sm whitespace-pre-line text-center mt-4 ">{errorMessage}</p>} {/* Display error message if exists */}
                </form>
            </div>
            <br />
            <p>ou</p>
            <br />
            <Link to={`/loginpage`} 
                    // className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                    >Vous identifier</Link>
            <br />
            <Footer/>
        </div>
    );
}