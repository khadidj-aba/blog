
import React, { useState } from 'react';
import ArticleList from '../components/ArticleList';
import ArticleForm from '../components/ArticleForm'; // Formulaire pour ajouter un article
import Home from '../components/Home';
const articlesData = [
  {
    title: 'Introduction à React',
    content: 'React est une bibliothèque JavaScript populaire pour la création d\'interfaces utilisateur.',
  },
  {
    title: 'Les bases du JavaScript',
    content: 'JavaScript est un langage de programmation utilisé pour créer des pages web interactives.',
  },
];

const HomePage = () => {
  const [articles, setArticles] = useState(articlesData);
  const [showForm, setShowForm] = useState(false);

  // Fonction pour ajouter un article
  const addArticle = (newArticle) => {
    setArticles([newArticle, ...articles]);
    setShowForm(false); // Fermer le formulaire après l'ajout
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liste des Articles</h1>
      {/* Bouton pour afficher le formulaire */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Ajouter un article
      </button>

      {/* Affichage conditionnel du formulaire */}
      {showForm && <ArticleForm onSubmit={addArticle} />}

      {/* Liste des articles */}
      <ArticleList articles={articles} />
    </div>
  );
};

export default HomePage;
