import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
import cookieParser from 'cookie-parser';

//Concerne la 2e version
// const salt = 10; 

// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  //connectionLimit: 10, 
  // A ajuster si nécessaire
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DESIGNLogin',
  port: 3306,
});

 db.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("MySQL Connected...");
    }
 })

app.post('/loginpage', (req, res) => {
    console.log('test2');
    const { username, password } = req.body;

    const sql = 'SELECT * FROM Users WHERE username = ? AND password = ?';
    console.log('test3');
    db.query(sql, [username, password], (err, result) => {

//Variante de la 2e version
// app.post('/login', (req, res) => {
//     const { name_user, first_name_user, email, password_user } = req.body;
      
//     const sql = 'SELECT * FROM Users WHERE id = ? AND name_user = ? AND first_name_user = ? AND email = ? AND password_user = ?';
//     db.query(sql, [name_user, first_name_user, email, password_user], (err, result) => {
// Fin de la variante
    if (err) {
      res.status(500).json({ message: 'An error occurred while processing your request.' });
    } else {
      if (result.length > 0) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Login failed. Invalid username or password.' });
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//1re version
// const salt = 10;

//  const app = express();
//  app.use(express.json);
//  app.use(cors());
//  app.use(cookieParser());

//  const db = mysql.createConnection({
//     host:"localhost",
//     user:'root',
//     password:'',
//     database:"test"
//     port: 3306,
//  })

//  db.connect((error) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("MySQL Connected...");
//     }
//  })
//  console.log("test3");
//  app.post('/registration', (req, res) => {
//     console.log("test4");
//     const sql = "INSERT INTO users (`name_user`, `email`, `password_user`) VALUES (?)";
//     //hashage du mot de passe
//     console.log("test2");
//     bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//         if(err) return res.json({Error: "Error for hashing password"})
//         const values = [
//             req.body.name_user,
//             req.body.email,
//             //req.body.password
//             //la ligne précédente n'est pas gardée pour des raisons de sécurité car le mdp se doit d'être hashé
//             hash
//             //ça c'est le remplaçant
//         ];
//         console.log(values);
//         console.log("test1");
//         db.query(sql, [values], (err, result) => {
//             console.log("test");
//             // if(err) return res.json({Error: "Inserting data Error in server"});
//             if(err) return res.json(err);
//             console.log(result);
//             return res.json({Status: "Success"});
//         })
//     })
    
// })

//  app.listen(5173,()=> {
//     console.log("Running. ..");
//  })
