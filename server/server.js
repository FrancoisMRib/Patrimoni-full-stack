import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'
import cookieParser from 'cookie-parser';
const salt = 10;

 const app = express();
 app.use(express.json);
 app.use(cors());
 app.use(cookieParser());

 const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:"test"
 })

 db.connect((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("MySQL Connected...");
    }
 })
 console.log("test3");
 app.post('/registration', (req, res) => {
    console.log("test4");
    const sql = "INSERT INTO users (`name_user`, `email`, `password_user`) VALUES (?)";
    //hashage du mot de passe
    console.log("test2");
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error for hashing password"})
        const values = [
            req.body.name_user,
            req.body.email,
            //req.body.password
            //la ligne précédente n'est pas gardée pour des raisons de sécurité car le mdp se doit d'être hashé
            hash
            //ça c'est le remplaçant
        ];
        console.log(values);
        console.log("test1");
        db.query(sql, [values], (err, result) => {
            console.log("test");
            // if(err) return res.json({Error: "Inserting data Error in server"});
            if(err) return res.json(err);
            console.log(result);
            return res.json({Status: "Success"});
        })
    })
    
})

 app.listen(5173,()=> {
    console.log("Running. ..");
 })
