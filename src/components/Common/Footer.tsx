import styled from 'styled-components';
import { Panel } from 'primereact/panel';
import 'primeicons/primeicons.css';

const StyledFooterWrapper = styled.div`
  position: relative;
  min-height: 10vh;
`;
const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
`;
function Footer() {
  return (
    <StyledFooterWrapper>
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
    </StyledFooterWrapper>
  );
}

export default Footer;
