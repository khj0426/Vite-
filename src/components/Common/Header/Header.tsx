import styled from 'styled-components';
import Theme from '../../Theme/Common';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import HeaderLoginItem from './LoginItem';
import HeaderFeedBackItem from './FeedBackItem';

const Container = styled.header`
  border: ${(props) => `1px solid ${props?.theme?.colors?.White}`};
  background-color: ${(props) => `${props.theme.colors.White}`};
  font-family: ${(props) => `${props.theme.fonts[0]}`};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: none;
  justify-content: space-between;
  background-color: #000;
  color: white;
`;

function Header() {
  return (
    <Theme>
      <Container>
        <div
          style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Link to="/Vite-React">
            <div
              className="pi pi-desktop"
              style={{
                fontSize: '2.1rem',
                color: 'slateblue',
                display: 'inline',
              }}
            />
          </Link>
          <div>
            <h2 style={{ display: 'inline', marginRight: '15px' }}>NearBy</h2>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
          }}
        >
          <HeaderFeedBackItem /> <HeaderLoginItem />
        </div>
      </Container>
    </Theme>
  );
}

export default Header;
