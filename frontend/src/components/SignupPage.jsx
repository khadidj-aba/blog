import React, { useState } from 'react';
import axios from 'axios';
import SignupForm from '../components/SignupForm';
const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/signup', { username, password });
      alert('Utilisateur créé avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'inscription', error);
      alert('Erreur d\'inscription');
    }
  };

  return (
    <div>
      <h2>S'inscrire</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nom d'utilisateur"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignupPage;
