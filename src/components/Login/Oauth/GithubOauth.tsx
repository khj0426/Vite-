import { authService } from '../../../../firebaseConfig';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { Button } from 'primereact/button';
import userState from '../../Atoms/userAtom';
import type user from '../../types/User';
import useOAuthMsg from '../../../hook/Domain/OAuth/useOAuthMsg';
import { Messages } from 'primereact/messages';

const GithubLogin = () => {
  const [user, setUser] = useRecoilState(userState);
  const provider = new GithubAuthProvider();
  const { msg, addMsg, clearMsg } = useOAuthMsg();
  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(authService, provider);
      const newUser: user = {
        isLogin: true,
        displayName: result.user.displayName || '',
        photoURL: result.user.photoURL || '',
      };
      setUser(newUser);
      addMsg({
        severity: 'success',
        summary: `${result.user.displayName}님 반가워요`,
      });
    } catch (error) {}
  };
  return (
    <>
      <Button onClick={handleGithubLogin}>
        <i className="pi pi-github">깃허브로 로그인하기</i>
      </Button>
      <Messages
        ref={msg}
        style={{
          width: '100%',
          fontSize: '14px',
        }}
      />
    </>
  );
};

export default GithubLogin;
