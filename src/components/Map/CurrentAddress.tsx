import type { AddressHandlerType } from '../types/Location/Address';
import { Button } from 'primereact/button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTitle = styled.h3`
  font-weight: 700;
  display: flex;
  color: white;
  flex-wrap: wrap;
`;

const StyledCurrentAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

function CurrentAddress({ resultAddress }: AddressHandlerType) {
  return (
    <>
      {resultAddress && (
        <StyledCurrentAddress>
          <StyledTitle>{`${resultAddress[0]?.address?.address_name}근처의 모든 것을 만나고 싶다면?`}</StyledTitle>

          <Link to="/Vite-React/Detail">
            <Button style={{ fontWeight: 700, width: '170px' }}>
              지금 만나러 가기{' '}
            </Button>
          </Link>
        </StyledCurrentAddress>
      )}
    </>
  );
}

export default CurrentAddress;
