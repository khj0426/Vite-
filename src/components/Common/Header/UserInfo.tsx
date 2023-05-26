import type user from '../../types/User';
import LoginModal from '../../Login/LoginModal';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';

const UserInfo = ({ isLogin, displayName, photoURL }: user) => {
  return (
    <>
      {isLogin === false && <LoginModal />}
      {isLogin === true && (
        <>
          <Badge size="large" value={displayName} />
          <Avatar
            imageAlt="유저의 프로필 이미지"
            size="large"
            shape="circle"
            image={photoURL}
          />
        </>
      )}
    </>
  );
};

export default UserInfo;
