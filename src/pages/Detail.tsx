import PlaceItemList from '../components/Places/PlaceItemList';
import MapWrapper from '../components/Map/MapWrapper';
import { MapWrapperProps } from '../components/Map/MapWrapper';
import PlaceInputText from '../components/Places/PlaceInputText';
import SelectCategory from '../components/types/Search/SelectCategory';
import DetailPageCarousel from '../components/Main/DetilPageCarousel';

const Detail = ({ props }: { props: MapWrapperProps }) => {
  return (
    <>
      <PlaceInputText />
      <DetailPageCarousel />
      <MapWrapper props={props} />
      <PlaceItemList />
    </>
  );
};

export default Detail;
