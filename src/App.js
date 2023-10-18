import React from 'react';

import MobileMain from './components/mobile/Main';
import DesktopMain from './components/desktop/Main';
import { useMediaQuery } from 'react-responsive';


function App() {

  /// Определяем размеры экрана для адаптации
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })  // You are a desktop or laptop
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })       // You  have a huge screen
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })  // You are a tablet or mobile phone
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })    // Your are in portrait or landscape orientation
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })      // You are retina
  const isWatch = useMediaQuery({ query: '(max-width: 224px)' })  // You are a tablet or mobile phone

  return (
    <>
    
     {isTabletOrMobile?<MobileMain></MobileMain>:<DesktopMain></DesktopMain>}
    </>
  );
}

export default App;
