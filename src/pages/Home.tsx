import MapWrapper from '../components/Map/MapWrapper';
import Main from '../components/Main/Main';
import type { MapWrapperProps } from '../components/Map/MapWrapper';
import CurrentAddress from '../components/Map/CurrentAddress';

const Home = ({ props }: { props: MapWrapperProps }) => {
  return (
    <div>
      <Main />
      <CurrentAddress error={props.error} resultAddress={props.resultAddress} />
    </div>
  );
};

export default Home;
