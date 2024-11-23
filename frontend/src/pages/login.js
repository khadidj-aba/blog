// import LoginPage from "@/components/LoginPage";

// export default function login() {
//   return <LoginPage />;
// }
import React from 'react';

export async function getServerSideProps(context) {
  // Exemple : Vérification de session ou données dynamiques
  const isLoggedIn = false; // Simulation d'une vérification

  // Rediriger l'utilisateur s'il est déjà connecté
  if (isLoggedIn) {
    return {
      redirect: {
        destination: '/dashboard', // Redirection vers une autre page
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Pas de données supplémentaires pour cette page
  };
}

const LoginPage = () => {
  return (
    <div>
      <h1>Se connecter</h1>
      <form>
        <label>
          Nom d'utilisateur:
          <input type="text" name="username" />
        </label>
        <label>
          Mot de passe:
          <input type="password" name="password" />
        </label>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default LoginPage;
