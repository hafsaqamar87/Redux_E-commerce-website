import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
// import Sell from "./components/Sell/Sell";

import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import SellProduct from './components/SellProduct/SellProduct';
import Favourite from './components/FavouriteItem/Favourite';
import Login from './components/Login/login';
import SignUp from './components/SignUp/SignUp';


// import Slides from './slides';



function App({ current }) {
 
  return (
    <Router>
      <div className="app">
        <Navbar />
     {/* <Slides /> */}
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/SignUp" component={SignUp}/>
          <Route exact path="/Favourite" component={Favourite} />
          <Route exact path="/SellProduct" component={SellProduct} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
