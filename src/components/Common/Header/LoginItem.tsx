import { useState } from 'react';
import LoginModal from '../../Login/LoginModal';

const HeaderLoginItem = () => {
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  return (
    <>
      <button
        className="pi pi-user"
        onClick={() => setLoginModalOpen(!loginModalOpen)}
        style={{
          fontSize: '1.2rem',
          color: 'slateblue',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          border: 'none',
          fontWeight: '500',
        }}
      >
        <span
          style={{
            color: 'white',
          }}
        >
          Login
        </span>
      </button>
      {loginModalOpen && <LoginModal />}
    </>
  );
};

export default HeaderLoginItem;
