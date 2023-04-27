import React from 'react';
import { atom, selector } from 'recoil';
import type CategoryType from '../types/Search/category';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'placeSearchState',
  storage: sessionStorage,
});

const PlaceSearchAtom = atom<kakao.maps.services.PlacesSearchResult>({
  key: 'placeSearchState',
  default: [],
  effects_UNSTABLE: [persistAtom],
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

const PlaceCategoryAtom = atom<CategoryType>({
  key: 'placeCategory',
  default: 'CE7',
});

const categoryState = selector<CategoryType>({
  key: 'categoryState',
  get: ({ get }) => {
    const category = get(PlaceCategoryAtom);
    return category;
  },

  set: ({ set }, newValue) => {
    set(PlaceCategoryAtom, newValue);
  },
});

const mapAtom = atom({
  key: 'map',
  default: {},
});

export { searchState, categoryState, mapAtom };
