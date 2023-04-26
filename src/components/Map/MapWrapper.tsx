import Map from './Map';
import CurrentAddress from './LocationIndicator';
import type { AddressHandlerType } from '../types/Location/Address';
import AddressConstants from '../constants/AddressConstant';
import styled from 'styled-components';
import useInViewPort from '../../hook/useInViewPort';
import { useRef, useEffect } from 'react';
import type CategoryType from '../types/Search/category';
import { useRecoilValue } from 'recoil';
import { categoryState } from '../Atoms/Atoms';

export type MapWrapperProps = AddressHandlerType & {
  pos: GeolocationPosition | undefined;
};

const StyledMapWrapper = styled.div`
  justify-content: space-around;
  width: 80%;
  margin: 200px auto;
  display: flex;
  opacity: 0;
  flex-wrap: wrap;
  &.animation {
    animation-name: opacity;
    animation-duration: 1500ms;
    animation-fill-mode: forwards;

    @keyframes opacity {
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      to {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }
`;

const MapWrapper = ({ props }: { props: MapWrapperProps }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const category = useRecoilValue(categoryState);
  const InViewPort = useInViewPort(mapRef, {
    threshold: 1,
  });

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
    <StyledMapWrapper ref={mapRef} className={InViewPort ? 'animation' : ''}>
      <Map pos={props.pos} />
    </StyledMapWrapper>
  );
};

export default MapWrapper;
