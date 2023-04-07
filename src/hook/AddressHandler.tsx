import React from 'react';
import type { AddressHandlerType } from '../components/types/Location/Address';
import AddressConstants from '../components/constants/AddressConstant';

function AddressHandlerError({ resultAddress, error }: AddressHandlerType) {
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
export default AddressHandlerError;
