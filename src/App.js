import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


import Rental from './containers/pages/bikeRentals';
import NavigationBar from './containers/pages/navigation';
import Accesories from './containers/pages/rentalAccessories';
import Insurance from './containers/pages/insurance';
import Summary from './containers/pages/summary';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <div>
          <Route exact path='/' component={Rental} />
          <Route exact path='/accesories' component={Accesories} />
          <Route exact path='/insurance' component={Insurance} />
          <Route exact path='/summary' component={Summary} />
        </div>
      </Router>
    </div>
  );
}

export default App;
