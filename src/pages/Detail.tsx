import DetailItemList from '../components/Details/DetailList';
import MapWrapper from '../components/Map/MapWrapper';
import { MapWrapperProps } from '../components/Map/MapWrapper';
const Detail = ({ props }: { props: MapWrapperProps }) => {
  return (
    <>
      <MapWrapper props={props} />
      <DetailItemList />
    </>
  );
};

export default Detail;
