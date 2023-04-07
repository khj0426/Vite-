import React from 'react';
import type { AddressHandlerType } from '../types/Location/Address';
import AddressConstants from '../constants/AddressConstant';

// 현재 위치를 알려주는 컴포넌트
function CurrentAddress({ resultAddress, error }: AddressHandlerType) {
  return (
    <>
      {error === kakao.maps.services.Status.ERROR && (
        <div>{AddressConstants.serverError}</div>
      )}

      {error === kakao.maps.services.Status.ZERO_RESULT && (
        <div>{AddressConstants.notfoundError}</div>
      )}

      {typeof resultAddress !== 'undefined' ? (
        <h1>{resultAddress[0].address.address_name}</h1>
      ) : null}
    </>
  );
}
export default CurrentAddress;
