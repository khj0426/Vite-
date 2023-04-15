import MapWrapper from '../components/Map/MapWrapper';
import Main from '../components/Main/Main';
import { MapWrapperProps } from '../components/Map/MapWrapper';

const Home = ({ props }: { props: MapWrapperProps }) => {
  return (
    <div>
      <Main />
      <MapWrapper props={props} />
    </div>
  );
};

export default Home;
