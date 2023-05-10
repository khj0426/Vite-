import { useRef, useEffect, useState } from 'react';
import useCreatePlaceMap from '../../../hook/Domain/Map/useCreatePlaceMap';

const PlaceMap = ({
  list,
}: {
  list: kakao.maps.services.PlacesSearchResultItem;
}) => {
  const { placeMapRef } = useCreatePlaceMap({
    x: Number(list.y),
    y: Number(list.x),
  });

  return (
    <div
      ref={placeMapRef}
      style={{
        display: 'grid',
        width: '300px',
        height: '300px',
        alignItems: 'center',
      }}
    />
  );
};

export default PlaceMap;
