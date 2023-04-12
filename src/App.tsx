import React from 'react';
import Header from './components/Header/Header';
import AddressHandlerError from './components/Map/AddressHandler';
import useCurrentPos from './hook/Domain/Map/getcurrentPos';
import GlobalStyle from './components/style/Globalstyle';
import CafeListDetail from './components/Map/SearchPlace/CafeSearch';
import Intro from './components/Main/Intro';
import Footer from './components/Footer';
import About from './components/Main/About';
import Map from './components/Map/Map';
import { StyledIntroTextContainer as WrapperMap } from './components/Main/Intro';
import DetailNearAreaLists from './components/Details/DetailList';
function App() {
  const { resultAddress, error, currentLocation } = useCurrentPos();

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Intro />
        <About />
        <WrapperMap
          style={{
            flexDirection: 'row',
            marginTop: '200px',
            justifyContent: 'space-around',
          }}
        >
          {typeof currentLocation !== 'undefined' && (
            <Map pos={currentLocation} />
          )}
          <AddressHandlerError resultAddress={resultAddress} error={error} />
        </WrapperMap>
        <Footer />
      </div>
    </>
  );
}

export default App;
