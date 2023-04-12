import React from 'react';
import styled from 'styled-components';
import Theme from '../Theme/Common';
import 'primeicons/primeicons.css';

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
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <div
            className="pi pi-desktop"
            style={{
              fontSize: '2.1rem',
              color: 'slateblue',
              display: 'inline',
            }}
          />
          <div>
            <h2 style={{ display: 'inline', marginRight: '15px' }}>NearBy</h2>
          </div>
        </div>

        <div
          className="pi pi-comment"
          style={{
            fontSize: '1.2rem',
            color: 'slateblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2XZYgjrij4NOELlTmKu56dN51qGBVZgHcMs_I1ByGnpZ5Ag/viewform?usp=sf_link"
            target="_blank"
            style={{
              fontSize: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '500',
              textDecoration: 'none',
              color: 'white',
            }}
            rel="noreferrer"
          >
            의견보내기
          </a>
        </div>
      </Container>
    </Theme>
  );
}

export default Header;
