import useCurrentPos from './hook/Domain/Map/getcurrentPos';
import GlobalStyle from './components/style/Globalstyle';
import { MapWrapperProps } from './components/Map/MapWrapper';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';

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
        <Route path="/Vite-React/" element={<Home props={MapProps} />} />
      </Routes>
    </div>
  );
}

export default App;
