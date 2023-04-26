import styled from 'styled-components';
import { Panel } from 'primereact/panel';
import 'primeicons/primeicons.css';

function Footer() {
  const StyledFooter = styled.footer`
    bottom: 0;
    height: 65px;
    margin-top: 50px;
  `;
  return (
    <StyledFooter>
      <Panel
        header="NearBy"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <span>
          <a
            href="https://github.com/khj0426/Vite-React"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="pi pi-github"
              style={{
                color: 'black',
                width: '1rem',
              }}
            />
          </a>
        </span>
        <span
          className="m-0"
          style={{
            marginLeft: '30px',
          }}
        >
          © wanicon.© freepik All rights reserved.
        </span>
      </Panel>
    </StyledFooter>
  );
}

export default Footer;
