# Patrimoni-full-stack

//ici se trouvent en dépôt les anciennes versions de "register" et de "login" que j'ai utilisées dans le ficheir "server.js", que je garde au cas où :

//Concerne la 2e version de login
// const salt = 10; 

// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

//Partie concernant l'ajout de compte - version 1
// app.post('/registration', (req, res) => {
//     const { first_name_user, name_user, email, password_user } = req.body;
      
//     const sql = 'INSERT INTO users2 (`name_user`, `first_name_user`, `email`, `password_user`) VALUES (?)';
//     //hashage du mot de passe
//     console.log("test2");
//     bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//         if(err) return res.json({Error: "Error for hashing password"})
//         const values = [
//             req.body.name_user,
//             req.body.first_name_user,
//             req.body.email,
//             //req.body.password_user
//             //la ligne précédente n'est pas gardée pour des raisons de sécurité car le mdp se doit d'être hashé
//             hash,
//             //ça c'est le remplaçant
//         ];
//         console.log(values);
//         console.log("test1");
//     db.query(sql, [name_user, password_user], (err, result) => {
// // Fin de la variante
//     if (err) {
//       res.status(500).json({ message: 'An error occurred while processing your request.' });
//     } else {
//       if (result.length > 0) {
//         res.status(200).json({ message: 'Login successful' });
//       } else {
//         res.status(401).json({ message: 'Login failed. Invalid username or password.' });
//       }
//     }
//   });
// });

//2e version
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

3e version : 
//
<!-- app.post('/registration', async (req, res) => {
    const { name_user, first_name_user, email, password_user } = req.body;
  
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password_user, saltRounds);
  
      const sql = 'INSERT INTO Users2 (name_user, first_name, email, password_user) VALUES (?, ?, ?, ?)';
      await db.query(sql, [name_user, first_name_user, email, hashedPassword]);
  
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error('Error during registration:', error);

       // Handle specific registration errors (e.g., duplicate email)
    if (error.errno === 1062 && error.sqlState === '42S02') {
        // Duplicate email error
        res.status(409).json({ message: 'Email already exists.' });
      } else {
        // Other errors
        res.status(500).json({ message: 'An error occurred during registration.' });
      } 
    }
  });

//Version issue d'une ancienne version de server.js
app.post('/register', (req, res) => {
    console.log("test4");
    const sql = "INSERT INTO users2 (`name_user`, `first_name_user`, `email`, `password_user`) VALUES (?)";
    //hashage du mot de passe
    console.log("test2");
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error for hashing password"})
        const values = [
            req.body.name_user,
            req.body.first_name_user,
            req.body.email,
            //req.body.password_user
            //la ligne précédente n'est pas gardée pour des raisons de sécurité car le mdp se doit d'être hashé
            hash,
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
}); -->

