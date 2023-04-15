import useCurrentPos from './hook/Domain/Map/getcurrentPos';
import GlobalStyle from './components/style/Globalstyle';
import { MapWrapperProps } from './components/Map/MapWrapper';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Detail from './pages/Detail';
import Footer from './components/Footer';

function App() {
  const { resultAddress, error, currentLocation } = useCurrentPos();
  const MapProps: MapWrapperProps = {
    resultAddress,
    error,
    pos: currentLocation,
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home props={MapProps} />} />
        {currentLocation && <Route path="/Detail" element={<Detail />} />}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
