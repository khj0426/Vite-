// |Good parts:
// |- The code is using TypeScript, which helps catch errors during development.
// |- The code is using React hooks, which is a modern way of managing state and side effects in React.
// |- The code is using the useCallback hook to memoize the getQueryList function, which can improve performance by preventing unnecessary re-renders.
// |- The code is using the useEffect hook to call the getQueryList function when the component mounts or when the getQueryList function changes.
// |
// |Bad parts:
// |- The code is disabling the eslint comma-dangle rule, which can make the code less readable and harder to maintain.
// |- The code is not handling errors that may occur during the categorySearch function call. It only sets the error state if the status is not OK, but there may be other errors that can occur.
// |
/* eslint-disable @typescript-eslint/comma-dangle */
import { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import PlaceSearchAtom from '../../../../components/Atoms/Atoms';

function useSearchList(map: kakao.maps.Map | undefined) {
  const [res, setRes] = useState<kakao.maps.services.PlacesSearchResult>();
  const [err, setErr] = useState<kakao.maps.services.Status>();
  const [searchRes, setSearchRes] = useRecoilState(PlaceSearchAtom);

  const getQueryList = useCallback(() => {
    if (!map) return;
    const $placeSearch = new kakao.maps.services.Places(map);
    $placeSearch.categorySearch(
      'CE7',
      (result, status, paganation) => {
        if (status === kakao.maps.services.Status.OK) {
          setSearchRes((prev) => {
            return [...result, ...prev];
          });
        } else {
          setErr(status);
        }
        if (paganation.hasPrevPage) {
          paganation.prevPage();
        }
      },
      {
        useMapCenter: true,
        page: 3,
        sort: kakao.maps.services.SortBy.DISTANCE,
      }
    );
  }, [map]);

  useEffect(getQueryList, [getQueryList]);

  return { res, err };
}

export default useSearchList;
