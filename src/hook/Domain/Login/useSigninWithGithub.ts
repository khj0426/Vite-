import { authService } from '../../../../firebaseConfig';
import { useCallback, useState } from 'react';
import {
  AuthError,
  signInWithPopup,
  GithubAuthProvider,
  UserCredential,
  User,
} from 'firebase/auth';

const useSigninWithGithub = () => {
  const provider = new GithubAuthProvider();
  const [error, setError] = useState<AuthError>();
  const [user, setUser] = useState<User>();
  const signinWithGithub = useCallback(() => {
    signInWithPopup(authService, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => setError(error));
  }, []);

  signinWithGithub();
  return { error, user };
};

export default useSigninWithGithub;
