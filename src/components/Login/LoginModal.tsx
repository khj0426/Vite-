import CommonModal from '../Common/Modal';
import type { ModalProps } from '../Common/Modal';
import GithubLogin from './GithubLogin';

const LoginModal = () => {
  const LoginModalProps: ModalProps = {
    label: '로그인',
    style: {
      width: '300px',
      height: '400px',
    },
    title: (
      <h2
        style={{
          fontWeight: '700',
        }}
      >
        로그인
      </h2>
    ),
    content: (
      <div
        style={{
          marginBottom: '20px',
          color: '#555555',
        }}
      >
        로그인을 해서 가고 싶은 장소를 저장해보세요!
      </div>
    ),
    children: <GithubLogin />,
  };
  return <CommonModal {...LoginModalProps} />;
};

export default LoginModal;
