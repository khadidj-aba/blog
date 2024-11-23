const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/articles', require('./routes/articleRoutes'));

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000
})
  .then(() => console.log('Connexion reussi à la BDD'))
  .catch(err => console.error('Erreur de connexion à la bdd:', err));
  app.get('/', (req, res) => {
    res.send('Bienvenue sur le backend de l\'API Blog.');
  });
  
module.exports = app;
