import React from 'react';
import { atom } from 'recoil';

const PlaceSearchAtom = atom<kakao.maps.services.PlacesSearchResult>({
  key: 'placeSearchState',
  default: [],
});

export default PlaceSearchAtom;
