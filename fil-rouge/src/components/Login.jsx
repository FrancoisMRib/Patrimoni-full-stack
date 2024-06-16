import React from "react";
import { Link } from "react-router-dom";
import './App.css';

export function Login() {
    return (
        <div 
        className="d-flex justify-content-center align-items-center bg-primary vh-100"
        >
            <div className="presentation">
            <div 
            className="bg-white p-3 rounded w-25"
            >
                <h2>Sign In</h2>
                <form>
                    <div>
                        <label htmlFor="email"><strong>Mail</strong></label>
                        <input type="email" placeholder="Entrer votre email" name="email"
                        className="form-control rounded-0"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"><strong>Mot de passe</strong></label>
                        <input type="password" placeholder="Entrer votre mot de passe" name="password"
                        className="form-control rounded-0"
                        />
                    </div>
                    <button type="submit" 
                    className="btn btn-success w-100 rounded-0"
                    >S'authentifier</button>
                    <p>Vous êtes en accord avec nos termes et nos politiques</p>
                    <Link to={`/registration`} 
                    className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                    >Créer un compte</Link>
                </form>
            </div>
            </div>
        </div>
    )
}