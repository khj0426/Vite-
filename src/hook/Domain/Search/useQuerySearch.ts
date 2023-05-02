import { useState, useCallback, useEffect } from 'react';

function useQuerySearch({ query }: { query: string }) {
  const [querySearchState, setQuerySearchState] =
    useState<kakao.maps.services.PlacesSearchResult>([]);
  const [error, setError] = useState<kakao.maps.services.Status>(
    kakao.maps.services.Status.OK
  );

  const querySearch = useCallback(() => {
    const place = new kakao.maps.services.Places();
    place.keywordSearch(query, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setQuerySearchState(result);
      } else {
        setError(status);
      }
    });
  }, [query]);

  useEffect(() => {
    querySearch();
  }, [querySearch]);

  return { querySearchState, error };
}

export default useQuerySearch;
