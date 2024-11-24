import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';  // Vérifiez que 'useRouter' est bien importé

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialise le hook useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();  // Empêcher le rechargement de la page

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', {
        username,
        password
      });

      if (response.status === 200) {
        // Rediriger vers la page d'accueil
        router.push('/');  // Remplacez '/' par '/accueil' si nécessaire
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Erreur inconnue');
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;
