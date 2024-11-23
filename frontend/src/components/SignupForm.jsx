import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  // États pour stocker les valeurs des champs du formulaire
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Pour afficher les erreurs si elles se produisent

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission

    try {
      // Envoi des données de l'utilisateur au backend pour l'inscription
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        password,
      });

      // Si la requête est réussie, on affiche un message de succès
      if (response.status === 201) {
        alert('Utilisateur créé avec succès');
      }
    } catch (error) {
      // Si une erreur se produit, on affiche le message d'erreur
      setError('Erreur lors de l\'inscription. Veuillez réessayer.');
      console.error('Erreur lors de l\'inscription', error);
    }
  };

  return (
    <div>
      <h2>S'inscrire</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Affichage de l'erreur s'il y en a une */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Mise à jour de l'état pour le nom d'utilisateur
            placeholder="Entrez votre nom d'utilisateur"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Mise à jour de l'état pour le mot de passe
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <div>
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
