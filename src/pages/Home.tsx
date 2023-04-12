import React from 'react';
import Header from '../components/Header/Header';
import MapWrapper from '../components/Map/MapWrapper';
import Footer from '../components/Footer';
import Main from '../components/Main/Main';
import { MapWrapperProps } from '../components/Map/MapWrapper';

const Home = ({ props }: { props: MapWrapperProps }) => {
  return (
    <div>
      <Main />
      <MapWrapper props={props} />
      <Footer />
    </div>
  );
};

export default Home;
