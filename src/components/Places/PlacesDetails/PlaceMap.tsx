import { useRef, useEffect, useState } from 'react';

const PlaceMap = ({
  list,
}: {
  list: kakao.maps.services.PlacesSearchResultItem;
}) => {
  const placeMapRef = useRef<HTMLDivElement | null>(null);
  const [placeMap, setPlaceMap] = useState<kakao.maps.StaticMap | null>(null);

  useEffect(() => {
    if (placeMapRef.current) {
      const newPlaceMap = new kakao.maps.StaticMap(placeMapRef.current, {
        center: new kakao.maps.LatLng(Number(list.y), Number(list.x)),
        marker: false,
        level: 2,
      });
      setPlaceMap(newPlaceMap);
    }
  }, []);

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
