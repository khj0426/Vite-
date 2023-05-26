import MapWrapper from '../components/Map/MapWrapper';
import Main from '../components/Main/Main';
import type { MapWrapperProps } from '../components/Map/MapWrapper';
import LocationIndicator from '../components/Map/LocationIndicator';

const Home = ({ props }: { props: MapWrapperProps }) => {
  return (
    <>
      <Main />
      <LocationIndicator
        error={props.error}
        resultAddress={props.resultAddress}
      />
    </>
  );
};

export default Home;
