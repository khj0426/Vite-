import useCurrentPos from './hook/Domain/Map/getcurrentPos';
import GlobalStyle from './components/style/Globalstyle';
import { MapWrapperProps } from './components/Map/MapWrapper';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Common/Header/Header';
import Detail from './pages/Detail';
import Item from './pages/Item';
import { RecoilRoot } from 'recoil';

function App() {
  const { resultAddress, error, currentLocation } = useCurrentPos();
  const MapProps: MapWrapperProps = {
    resultAddress,
    error,
    pos: currentLocation,
  };

  return (
    <RecoilRoot>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home props={MapProps} />} />
          {currentLocation && (
            <Route path="/Detail" element={<Detail props={MapProps} />} />
          )}
          <Route path="/item" element={<Item />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
