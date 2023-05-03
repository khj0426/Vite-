import PlaceItemList from '../components/Places/PlaceItemList';
import MapWrapper from '../components/Map/MapWrapper';
import { MapWrapperProps } from '../components/Map/MapWrapper';
import PlaceInputText from '../components/Places/PlaceInputText';
import SelectCategory from '../components/types/Search/SelectCategory';

const Detail = ({ props }: { props: MapWrapperProps }) => {
  return (
    <>
      <MapWrapper props={props} />
      <SelectCategory />
      <PlaceInputText />
      <PlaceItemList />
    </>
  );
};

export default Detail;
