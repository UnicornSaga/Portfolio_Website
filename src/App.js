import React from 'react';
import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/Intro/Intro";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Work from "./Components/Work/Work";
import Quotes from './Components/Quotes/Quotes';

import "./app.scss";
import "./global.scss";

class App extends React.Component{
  render() {
    return(
      <div className="app">
        <Topbar />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Quotes />
          <Work />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
