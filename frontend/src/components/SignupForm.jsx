// src/components/SignupForm.jsx
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        password
      });

      if (response.status === 201) {
        router.push('/login'); // Rediriger vers la page de connexion après l'inscription réussie
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Erreur inconnue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <h1>Inscription</h1> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Chargement...' : 'S\'inscrire'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
