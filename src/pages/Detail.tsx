import PlaceItemList from '../components/Places/PlaceItemList';
import MapWrapper from '../components/Map/MapWrapper';
import { MapWrapperProps } from '../components/Map/MapWrapper';
import PlaceInputText from '../components/Places/PlaceInputText';
const Detail = ({ props }: { props: MapWrapperProps }) => {
  return (
    <>
      <MapWrapper props={props} />
      <PlaceInputText />
      <PlaceItemList />
    </>
  );
};

export default Detail;
