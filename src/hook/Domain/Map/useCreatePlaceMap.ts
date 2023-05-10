import { useState, useEffect, useRef } from 'react';

type CreatePlaceMapProps = {
  x: number;
  y: number;
};

const useCreatePlaceMap = ({ x, y }: CreatePlaceMapProps) => {
  const [placeMap, setPlaceMap] = useState<kakao.maps.StaticMap | null>(null);
  const placeMapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (placeMapRef && placeMapRef.current) {
      const newPlaceMap = new kakao.maps.StaticMap(placeMapRef.current, {
        marker: false,
        level: 1,
        center: new kakao.maps.LatLng(x, y),
      });

      setPlaceMap(newPlaceMap);
    }
  }, []);

  return { placeMap, placeMapRef };
};

export default useCreatePlaceMap;
