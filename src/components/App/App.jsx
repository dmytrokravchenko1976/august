import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from '../Header/Header.jsx';
import Footer from  '../Footer/Footer.jsx';
import About from '../About/About.jsx';
import Home from '../Home/Home.jsx';

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
