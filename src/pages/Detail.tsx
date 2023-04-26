import PlaceItemList from '../components/Places/PlaceItemList';
import MapWrapper from '../components/Map/MapWrapper';
import { MapWrapperProps } from '../components/Map/MapWrapper';
const Detail = ({ props }: { props: MapWrapperProps }) => {
  return (
    <>
      <MapWrapper props={props} />
      <PlaceItemList />
    </>
  );
};

export default Detail;
