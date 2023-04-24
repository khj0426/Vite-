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
  align-items: center;
  max-width: 80%;
  gap: 20px;
  justify-content: flex-end;
  margin: 150px auto; /* 이 부분을 바꿔주세요! */
  flex-wrap: wrap;
  width: 100%;
`;

function CurrentAddress({ resultAddress }: AddressHandlerType) {
  return (
    <>
      {resultAddress && (
        <div>
          <StyledCurrentAddress>
            <StyledTitle>{`${resultAddress[0]?.address?.address_name}근처의 모든 것을 만나고 싶다면?`}</StyledTitle>
            <Link to="/Detail">
              <Button style={{ fontWeight: 700, width: '170px' }}>
                지금 만나러 가기{' '}
              </Button>
            </Link>
          </StyledCurrentAddress>
        </div>
      )}
    </>
  );
}

export default CurrentAddress;
