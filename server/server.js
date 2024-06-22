import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
import cookieParser from 'cookie-parser';

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
  database: 'NEWLogin',
  port: 3306,
});

 db.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("MySQL Connected...");
    }
 })

//  const proxy = require('http-proxy-middleware');
 
//  // Proxy toutes les requêtes vers '/api' vers votre serveur Node.js
//  app.use('/api', proxy({ target: 'http://localhost:3000' }));
 
//  // Servez le code de votre application React
//  app.use(express.static('public'));
 
//  app.listen(5173, () => {
//    console.log('Serveur en écoute sur le port 5173');
//  });

//Partie concernant l'authentification

// app.post('/loginpage', (req, res) => {
//     console.log('test2');
//     const { username, password } = req.body;

//     const sql = 'SELECT * FROM Users WHERE username = ? AND password = ?';
//     console.log('test3');
//     db.query(sql, [username, password], (err, result) => {

//Variante de la 2e version
app.post('/loginpage', (req, res) => {
    const { name_user, password_user } = req.body;
      
    const sql = 'SELECT * FROM Users WHERE name_user = ? AND password_user = ?';
    db.query(sql, [name_user, password_user], (err, result) => {
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

app.post('/register', (req, res) => {

    // console.log(res);
    // console.log(req.body);
      const sql = 'INSERT INTO Users (`first_name_user`, `name_user`, `email`, `password_user`) VALUES (?)';
    //   bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error:"Error for hashing apssword"});
        
        const values = [
            req.body.first_name_user,
            req.body.name_user,
            req.body.email,
            req.body.password_user
            //, hash
        ]

        db.query(sql, [values], (err, result) => {
            console.log("test");
            // if(err) return res.json({Error: "Inserting data Error in server"});
            if(err) return res.json(err);
            console.log(result);
            return res.json({Status: "Success"});
      }
    )  
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Remplacez par l'URL de votre application React
    // Autres en-têtes CORS (si nécessaire)
    next();
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});