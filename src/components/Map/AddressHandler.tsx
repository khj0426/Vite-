import React, { useRef } from 'react';
import type { AddressHandlerType } from '../types/Location/Address';
import AddressConstants from '../constants/AddressConstant';
import { Button } from 'primereact/button';
import styled, { css } from 'styled-components';

const StyledTitle = styled.h3`
  font-weight: 700;
  display: flex;
  color: white;
  flex-wrap: wrap;
`;

const StyledTitleButton = styled.button`
  width: 25px;
  height: 25px;
`;

const StyledCurrentAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

function CurrentAddress({ resultAddress, error }: AddressHandlerType) {
  return (
    <>
      {error === kakao.maps.services.Status.ERROR && (
        <div>{AddressConstants.serverError}</div>
      )}

      {error === kakao.maps.services.Status.ZERO_RESULT && (
        <div>{AddressConstants.notfoundError}</div>
      )}

      {resultAddress && (
        <StyledCurrentAddress>
          <StyledTitle>{`${resultAddress[0]?.address?.address_name}근처의 모든 것을 만나고 싶다면?`}</StyledTitle>

          <Button style={{ fontWeight: 700, width: '170px' }}>
            지금 만나러 가기
          </Button>
        </StyledCurrentAddress>
      )}
    </>
  );
}

export default CurrentAddress;
