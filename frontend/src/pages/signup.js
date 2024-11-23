import { useRouter } from 'next/router';

const SigninPage = () => {
  const router = useRouter();
  
  if (router.pathname === '/signin') {
    // L'utilisateur est déjà sur la page de connexion, évitez de rediriger
    return null;
  }

  return (
    <div>
      {/* Votre formulaire de connexion */}
    </div>
  );
};

export default SigninPage;
