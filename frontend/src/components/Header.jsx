import React from 'react';

const Header = () => {
  return (
    <header className="p-4 bg-blue-500 text-white">
        {/* Ajout du logo */}
      <img src="/images/Blog-Kadi.png" alt="Logo du site" width="50" height="50" />
      <nav>
        <ul className="flex gap-4">
          <li><a href="/">Accueil</a></li>
          <li><a href="/signup">S&apos;inscrire</a></li>
          <li><a href="/login">Se connecter</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
