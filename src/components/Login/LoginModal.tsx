import 'primeicons/primeicons.css';
import GithubLogin from './Oauth/GithubOauth';
import styled from 'styled-components';

const StyledLoginModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  z-index: 5;
  border-radius: 10px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const LoginModal = () => {
  return (
    <StyledLoginModal>
      <GithubLogin />
    </StyledLoginModal>
  );
};

export default LoginModal;
