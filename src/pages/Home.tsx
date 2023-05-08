import MapWrapper from '../components/Map/MapWrapper';
import Main from '../components/Main/Main';
import type { MapWrapperProps } from '../components/Map/MapWrapper';
import LocationIndicator from '../components/Map/LocationIndicator';

const Home = ({ props }: { props: MapWrapperProps }) => {
  return (
    <div>
      <Main />
      <LocationIndicator
        error={props.error}
        resultAddress={props.resultAddress}
      />
    </div>
  );
};

export default Home;
