import PlaceDetailItem from '../components/Places/PlacesDetails/PlaceDetailItem';
import PlaceMap from '../components/Places/PlacesDetails/PlaceMap';
import { useLocation } from 'react-router-dom';

const Item = () => {
  const { eachList }: { eachList: kakao.maps.services.PlacesSearchResultItem } =
    useLocation().state;

  return (
    <>
      <main
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
          width: '70%',
          margin: '50px auto',
          flexWrap: 'wrap',
        }}
      >
        <PlaceDetailItem list={eachList} />
        <PlaceMap list={eachList} />
      </main>
    </>
  );
};

export default Item;
