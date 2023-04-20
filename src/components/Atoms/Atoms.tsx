import React from 'react';
import { atom, selector } from 'recoil';

const PlaceSearchAtom = atom<kakao.maps.services.PlacesSearchResult>({
  key: 'placeSearchState',
  default: [],
});

const searchState = selector<kakao.maps.services.PlacesSearchResult>({
  key: 'PlaceSearchState',
  get: ({ get }) => {
    const searchItems = get(PlaceSearchAtom);
    return searchItems;
  },
  set: ({ set }, newSearchItems) => {
    if (typeof newSearchItems && newSearchItems) {
      set(PlaceSearchAtom, newSearchItems);
    }
  },
});

export { searchState };
