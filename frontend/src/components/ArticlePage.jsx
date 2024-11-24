import React from 'react';
import ArticleList from '../components/ArticleList';

const articles = [
  {
    title: 'Introduction à React',
    content: 'React est une bibliothèque JavaScript populaire pour la création d\'interfaces utilisateur. Elle facilite la construction de composants réutilisables et la gestion de l\'état.',
  },
  {
    title: 'Les bases du JavaScript',
    content: 'JavaScript est un langage de programmation utilisé pour créer des pages web interactives. Apprenez les bases, y compris les variables, les fonctions, et les boucles.',
  },
  {
    title: 'Node.js et l\'exécution côté serveur',
    content: 'Node.js permet d\'exécuter du JavaScript côté serveur. Il est utile pour la création d\'applications web, d\'APIs, et bien plus encore.',
  },
  {
    title: 'CSS Flexbox : Disposition simplifiée',
    content: 'Flexbox est un système de mise en page CSS qui simplifie la création de dispositions complexes. Il permet d\'aligner et de distribuer des éléments dans un conteneur de manière efficace.',
  },
  {
    title: 'Introduction à Next.js',
    content: 'Next.js est un framework React qui offre des fonctionnalités telles que le rendu côté serveur, la génération de pages statiques, et le routage intégré.',
  },
  {
    title: 'Sécurisation des applications web',
    content: 'Sécurisez vos applications en utilisant des techniques telles que l\'authentification, l\'autorisation, et la protection contre les attaques courantes comme
  };
    const HomePage = () => {
      return (
        <div>
          <h1 className="text-2xl font-bold mb-4">Liste des Articles</h1>
          <ArticleList articles={articles} />
        </div>
      );
    };
    
    export default HomePage;