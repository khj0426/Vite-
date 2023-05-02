import type CategoryType from '../types/Search/category';
const categories = [
  { label: '', value: '' },
  { label: '대형마트', value: 'MT1' },
  { label: '편의점', value: 'CS2' },
  { label: '어린이집, 유치원', value: 'PS3' },
  { label: '학교', value: 'SC4' },
  { label: '학원', value: 'AC5' },
  { label: '주차장', value: 'PK6' },
  { label: '주유소, 충전소', value: 'OL7' },
  { label: '지하철역', value: 'SW8' },
  { label: '은행', value: 'BK9' },
  { label: '문화시설', value: 'CT1' },
  { label: '중개업소', value: 'AG2' },
  { label: '공공기관', value: 'PO3' },
  { label: '관광명소', value: 'AT4' },
  { label: '숙박', value: 'AD5' },
  { label: '음식점', value: 'FD6' },
  { label: '카페', value: 'CE7' },
  { label: '병원', value: 'HP8' },
  { label: '약국', value: 'PM9' },
];

const validCategories = new Map<CategoryType, string>([
  ['MT1', '대형마트'],
  ['CS2', '편의점'],
  ['', ''],
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
