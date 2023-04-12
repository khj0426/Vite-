/* eslint-disable @typescript-eslint/comma-dangle */
import { useEffect, useState, useCallback } from 'react';

function useSearchList(map: kakao.maps.Map | undefined) {
  const [res, setRes] = useState<kakao.maps.services.PlacesSearchResult>();
  const [err, setErr] = useState<kakao.maps.services.Status>();

  const getQueryList = useCallback(() => {
    if (!map) return;
    const $placeSearch = new kakao.maps.services.Places(map);
    $placeSearch.categorySearch(
      'CE7',
      (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          setRes(result);
        } else {
          setErr(status);
        }
      },
      {
        useMapCenter: true,
        page: 3,
      }
    );
  }, [map]);

  useEffect(getQueryList, [getQueryList]);

  return { res, err };
}

export default useSearchList;
