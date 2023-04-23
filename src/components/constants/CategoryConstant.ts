import type CategoryType from '../types/Search/category';
const categories = [
  { label: '카페', value: 'CE7' },
  { label: '음식점', value: 'FD6' },
  { label: '편의점', value: 'CS2' },
];

const validCategories = new Map<CategoryType, string>([
  ['MT1', '대형마트'],
  ['CS2', '편의점'],
  ['PS3', '어린이집, 유치원'],
  ['SC4', '학교'],
  ['AC5', '학원'],
  ['PK6', '주차장'],
  ['OL7', '주유소, 충전소'],
  ['SW8', '지하철역'],
  ['BK9', '은행'],
  ['CT1', '문화시설'],
  ['AG2', '중개업소'],
  ['PO3', '공공기관'],
  ['AT4', '관광명소'],
  ['AD5', '숙박'],
  ['FD6', '음식점'],
  ['CE7', '카페'],
  ['HP8', '병원'],
  ['PM9', '약국'],
]);

Object.freeze(categories);
Object.freeze(validCategories);
export { categories, validCategories };
