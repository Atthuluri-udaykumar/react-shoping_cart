import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbartop from './components/Navbar';
import Context from './components/context/Context';
import Cart from './components/Cart';
import Home from "./components/Home"
import Toys from "./components/Toys"
import Bags from "./components/Bags"

import { BrowserRouter, Route, Switch } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Navbartop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/toys">
              <Toys />
            </Route>
            <Route path="/bags">
              <Bags />
            </Route>
          </Switch>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
