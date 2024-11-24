// import React ,{useState, useEffect} from 'react';
// import Header from './Header';
// import ArticleList from './ArticleList';

// // Composant racine de l'application
// function Home() {
//    const [personne, setPersonne] = useState([]);
//    useEffect(() => {
//       fetch('http://localhost:3050/Abakar/doutoum')
//          .then((response) => response.json())
//          .then((data) => {
//             console.log(data);
//             setPersonne(data);
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//    }, []);
//   return (
//     <div className="min-h-screen bg-gray-100">
      
//       <main className="p-4">
//         <h1 className="text-2xl font-bold mb-4">Bienvenue sur le Blog</h1>
//         <div>
    
//       <p>Cette page est l'accueil du blog.</p>
//       <p>{personne}</p>
//     </div>
//         <ArticleList />
//       </main>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import Image from 'next/image'; // Utilisez le composant Image pour optimiser l'image

const Home = () => {
  return (
    <div>
      {/* En-tête */}
      <header className="bg-blue-500 text-white p-4 flex items-center justify-center">
        <h1 className="text-3xl">Bienvenue sur le Blog</h1>
      </header>

      {/* Bannière */}
      <main className="p-8">
        <div className="w-full max-w-5xl mx-auto">
          <Image
            src="/images/banner.png" // Chemin vers l'image dans le dossier public
            alt="Bannière du blog"
            width={1200} // Largeur de l'image (optimisé par Next.js)
            height={400} // Hauteur de l'image (optimisé par Next.js)
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
<div className="w-full max-w-5xl mx-auto">
  <Image
    src="/image1.png"
    alt="Bannière du blog"
    width={1200}
    height={400}
    className="rounded-lg shadow-lg border border-gray-200"
  />
</div>
