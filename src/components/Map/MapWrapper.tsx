import Map from './Map';
import type { AddressHandlerType } from '../types/Location/Address';
import AddressConstants from '../constants/AddressConstant';
import styled from 'styled-components';
import { useRef } from 'react';

export type MapWrapperProps = AddressHandlerType & {
  pos: GeolocationPosition | undefined;
};

const StyledMapWrapper = styled.div`
  margin: 15px auto;
  opacity: 1;
  flex-wrap: wrap;
`;

const MapWrapper = ({ props }: { props: MapWrapperProps }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  if (props.error === kakao.maps.services.Status.ERROR) {
    return <div>{AddressConstants.serverError}</div>;
  }

  if (props.error === kakao.maps.services.Status.ZERO_RESULT) {
    return <div>{AddressConstants.notfoundError}</div>;
  }

  if (typeof props.pos === 'undefined') {
    return <div>{props.error}</div>;
  }

  return (
    <StyledMapWrapper ref={mapRef}>
      <Map pos={props.pos} />
    </StyledMapWrapper>
  );
};

export default MapWrapper;
