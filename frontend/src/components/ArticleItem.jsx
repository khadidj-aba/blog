import React from 'react';

// Composant pour afficher un article unique
function ArticleItem({ article }) {
  return (
    <div className="p-4 border rounded mb-4">
      <h3 className="text-xl font-bold">{article.title}</h3>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticleItem;
