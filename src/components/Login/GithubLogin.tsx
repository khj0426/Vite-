import type user from '../types/User';
import { useRecoilState } from 'recoil';
import userState from '../Atoms/userAtom';
import { authService } from '../../../firebaseConfig';
import GithubButton from 'react-github-login-button';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';

const GithubLogin = () => {
  const [user, setUser] = useRecoilState(userState);
  const provider = new GithubAuthProvider();
  const handleGithubButtonClick = async () => {
    await signInWithPopup(authService, provider).then((result) => {
      const newUser: user = {
        photoURL: result.user.photoURL || '',
        displayName: result.user.displayName || '',
        isLogin: true,
      };
      setUser(newUser);
    });
  };
  return <GithubButton onClick={handleGithubButtonClick} />;
};

export default GithubLogin;
