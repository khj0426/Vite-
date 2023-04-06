import {useCreateMap} from '../../hook/useCreateMap';
import {useState, useEffect, useRef} from 'react';
import useCafeList from '../../hook/useCafeList';

//현재 위치와 지도 객체를 가져와서 지도를 랜더링한다
export const Map = ({pos}: {pos: GeolocationPosition}) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const [map, setMap] = useState<kakao.maps.Map>();
  useEffect(() => {
    if (divRef.current === null) {
      return;
    }

    setMap(useCreateMap({pos, container: divRef.current}));
  }, [divRef.current]);

  return (
    <>
      <div ref={divRef} style={{width: '500px', height: '500px'}} />
    </>
  );
};
