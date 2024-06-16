import { Header } from './Header';
import { Footer } from './Footer';
import './App.css';

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export function Register() {

    const [values, setValues] = useState({
        name_user: '',
        email: '',
        password_user: ''
    })

    axios.defaults.withCredentials = true ;
    const handleSubmit = (event) => {
        console.log(values);
        event.preventDefault();
        axios.post('http://localhost:8081/registration', values)
        // .then(res => console.log(res))
        .then(res => console.log(res))
        .then(err => console.log(err));
    }

    return (
        <div 
        
        >
            <Header/>
            <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div 
            className="bg-white p-3 rounded w-25"
            >
                <h2>Sign Up </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name_user"><strong>Nom </strong></label>
                        <input type="text" placeholder="Entrer votre nom" name="name_user"
                        onChange={e => setValues({...values, name_user : e.target.value})} 
                        className="form-control rounded-0"
                        />
                    </div>
                    <div>
                        <label htmlFor="email"><strong>Mail </strong></label>
                        <input type="email" placeholder="Entrer votre email" name="email"
                        onChange={e => setValues({...values, email : e.target.value})} 
                        className="form-control rounded-0"
                        />
                    </div>
                    <div>
                        <label htmlFor="password_user"><strong>Mot de passe </strong></label>
                        <input type="password" placeholder="Entrer votre mot de passe" name="password_user"
                        onChange={e => setValues({...values, password_user : e.target.value})} 
                        className="form-control rounded-0"
                        />
                    </div>
                    <br></br>
                    <button type="submit" 
                    className="btn btn-success w-100 rounded-0"
                    >S'enregistrer</button>
                    <p>Vous êtes en accord avec nos termes et nos politiques</p>
                    <Link to={`/login`} 
                    className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                    >J'ai déjà un compte</Link>
                </form>
            </div>
            </div>
            <Footer/>
        </div>
    )
}