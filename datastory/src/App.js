import React from 'react';
import LazyLoad from 'react-lazyload';
import PartOne from './PartOne.js';
import PartTwo from './PartTwo.js';
import PartThree from './PartThree.js';
import Conlusion from './Conlusion';
import './App.css';
import PartFour from './PartFour.js';

function App() {
  return (<>
    <div className="header">
      <div className="container">
        <h1>1 in 200 Billion</h1>
        {/* <h2>Among Two Billion Stars, We Found Paradise.
          Then We Set It On Fire</h2> */}
        <h2>One Paradise among 200 Billion, Then we set it on Fire </h2>
      </div>      
    </div>
    <div className="container main">
      <LazyLoad height={1000}>
        <PartOne/>
      </LazyLoad>
      <LazyLoad height={1000}>
        <PartTwo/>
      </LazyLoad>
      <LazyLoad height={1000}>
        <PartThree/>
      </LazyLoad>
      <LazyLoad height={1000}>
        <PartFour/>
      </LazyLoad>
      <LazyLoad height={1000}>
        <Conlusion/>
      </LazyLoad>
    </div>
  </>);
}

export default App;
