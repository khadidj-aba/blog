import React, { useState, useEffect } from 'react';
import ArticleItem from './ArticleItem';

const articles = [
    {
      title: 'Introduction à React',
      content: 'React est une bibliothèque JavaScript populaire pour la création d\'interfaces utilisateur. Elle facilite la construction de composants réutilisables et la gestion de l\'état.'
    },
    {
      title: 'Les bases du JavaScript',
      content: 'JavaScript est un langage de programmation utilisé pour créer des pages web interactives. Apprenez les bases, y compris les variables, les fonctions, et les boucles.'
    },
    {
      title: 'Node.js et l\'exécution côté serveur',
      content: 'Node.js permet d\'exécuter du JavaScript côté serveur. Il est utile pour la création d\'applications web, d\'APIs, et bien plus encore.'
    },
    {
      title: 'CSS Flexbox : Disposition simplifiée',
      content: 'Flexbox est un système de mise en page CSS qui simplifie la création de dispositions complexes. Il permet d\'aligner et de distribuer des éléments dans un conteneur de manière efficace.'
    },
    {
      title: 'Introduction à Next.js',
      content: 'Next.js est un framework React qui offre des fonctionnalités telles que le rendu côté serveur, la génération de pages statiques, et le routage intégré.'
    },
    {
      title: 'Sécurisation des applications web',
      content: 'Sécurisez vos applications en utilisant des techniques telles que l\'authentification, l\'autorisation, et la protection contre les attaques courantes comme les injections SQL.'
    },
    {
      title: 'Les hooks en React',
      content: 'Les hooks sont une fonctionnalité de React qui permettent d\'utiliser l\'état et d\'autres fonctionnalités sans écrire de classes.'
    },
    {
      title: 'Gestion de l\'état global avec Redux',
      content: 'Redux est une bibliothèque de gestion de l\'état qui aide à gérer l\'état global d\'une application, en facilitant la gestion des flux de données.'
    },
    {
      title: 'API REST : Les bases',
      content: 'Une API REST permet de créer des services web qui respectent des principes tels que l\'utilisation de méthodes HTTP, les URLs significatives, et le format JSON.'
    },
]
  
// Composant pour afficher une liste d'articles
function ArticleList() {
       

 
  return (
    <div>
      {articles.map(article => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;

const handleButtonClick = (article) => {
    alert(`Vous avez cliqué sur l'article : ${article.title}`);
  };

//   return (
//     <div>
//       {articles.map((article, index) => (
//         <div key={index} className="p-4 mb-4 border rounded shadow">
//           <h2 className="text-lg font-bold">{article.title}</h2>
//           <p>{article.content}</p>
//           <button
//             onClick={() => handleButtonClick(article)}
//             className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Voir plus
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ArticleList;