import Map from './Map';
import CurrentAddress from './CurrentAddress';
import type { AddressHandlerType } from '../types/Location/Address';
import AddressConstants from '../constants/AddressConstant';
import styled from 'styled-components';

export type MapWrapperProps = AddressHandlerType & {
  pos: GeolocationPosition | undefined;
};

const StyledMapWrapper = styled.div`
  justify-content: space-around;
  width: 80%;
  margin: 200px auto;
  display: flex;
  flex-wrap: wrap;
`;

const MapWrapper = ({ props }: { props: MapWrapperProps }) => {
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
    <StyledMapWrapper>
      <Map pos={props.pos} />
      <CurrentAddress error={props.error} resultAddress={props.resultAddress} />
    </StyledMapWrapper>
  );
};

export default MapWrapper;
