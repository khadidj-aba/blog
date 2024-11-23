// // 
// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/signin', {
//         username,
//         password
//       });
//       // Traitement après la connexion réussie, par exemple redirection
//       console.log(response.data);  // Affiche la réponse
//       alert('Connexion réussie');
//     } catch (error) {
//       console.error('Erreur lors de la connexion', error);
//       alert('Erreur de connexion');
//     }
//   };

//   return (
//     <div>
//       <h2>Se connecter</h2>
//       <form onSubmit={onSubmit}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Nom d'utilisateur"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Mot de passe"
//         />
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';  // Importer le hook de navigation

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();  // Initialisation du router pour la redirection

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Faire une requête POST pour se connecter
      const response = await axios.post('http://localhost:5000/api/auth/signin', { username, password });
      
      // Si la connexion est réussie, rediriger l'utilisateur vers la page d'accueil
      alert('Connexion réussie');
      router.push('/'); // Redirection vers la page d'accueil (ou une autre page si nécessaire)
    } catch (err) {
      // En cas d'erreur, afficher un message d'erreur
      console.error('Erreur lors de la connexion', err);
      setError('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <div>
      <h2>Se connecter</h2>
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
        <button type="submit">Connexion</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}  {/* Afficher l'erreur en cas de mauvais login */}
    </div>
  );
};

export default LoginPage;

