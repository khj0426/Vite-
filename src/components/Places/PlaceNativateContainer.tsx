import styled from 'styled-components';
import type {
  ImageNamePair,
  NavigateCardProps,
} from '../types/Common/PlaceNavigateCard';
import Cafe from '../../assets/PlaceImages/cafe.webp';
import Restruant from '../../assets/PlaceImages/restruant.webp';
import NavigateCard from '../Common/Cards/PlaceNavigateCards';

const PlaceNavigateContainer = () => {
  const PlacePairList: ImageNamePair[] = [
    {
      imgUrl: Cafe,
      label: '카페',
      onClick: () => {},
    },
    {
      imgUrl: Restruant,
      label: '음식점',
    },
  ];

  return (
    <NavigateCard
      itemList={PlacePairList}
      style={{
        display: 'flex',
        width: '70%',
        margin: '15px auto',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#fff',
        height: '300px',
        borderRadius: '15px',
      }}
    />
  );
};

export default PlaceNavigateContainer;
