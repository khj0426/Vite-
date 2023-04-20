// |Good parts:
// |- The code is well-structured and easy to read.
// |- The use of React hooks such as useState, useEffect
// and useRef makes the code more concise and easier to manage.
// |- The use of Recoil for state management is a good choice as
// it provides a simple and efficient way to manage state across components.
// |- The separation of concerns is well-maintained,
// with the map creation and search logic being handled by separate functions.
// |
// |Bad parts:
// |- The variable naming could be improved to make the code more readable and understandable.
// |- The useEffect hook that sets the search results in the Recoil state
//  has unnecessary dependencies, which could lead to performance issues.
// It should only depend on the data variable.
// |- The console.log statement in the useEffect hook could be removed
// or replaced with a more meaningful log message.
// |
import React, { useState, useEffect, useRef } from 'react';
import useMarker from '../../hook/Domain/Map/Marker/useMarker';
import { useRecoilState } from 'recoil';
import { searchState } from '../Atoms/Atoms';
import { createMap } from '../../hook/Domain/Map/useCreateMap';
import GetCafeList from '../../hook/Domain/SearchCategorie/Cafe/useCateList';

function Map({ pos }: { pos: GeolocationPosition }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<kakao.maps.Map>();
  const [res, setRes] = useRecoilState(searchState);
  const marker = useMarker(map, pos)?.marker;

  useEffect(() => {
    if (divRef.current) {
      const $newMap = createMap({ pos, container: divRef.current });
      setMap($newMap);
    }
  }, [pos]);

  const data = GetCafeList(map);
  useEffect(() => {
    if (typeof data.res !== 'undefined') {
      setRes(data.res);
    }
  }, [data.res, setRes]);

  return (
    <div
      ref={divRef}
      style={{
        width: '300px',
        height: '300px',
        background: 'inherit',
        display: 'flex',
      }}
    />
  );
}

export default Map;
