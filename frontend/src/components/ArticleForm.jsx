
import React, { useState } from 'react';

const ArticleForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    const newArticle = { title, content };
    onSubmit(newArticle); // Appeler la fonction parent avec le nouvel article
    setTitle(''); // Réinitialiser le formulaire
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow">
      <div className="mb-2">
        <label htmlFor="title" className="block font-bold mb-1">
          Titre
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label htmlFor="content" className="block font-bold mb-1">
          Contenu
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Ajouter
      </button>
    </form>
  );
};

export default ArticleForm;
