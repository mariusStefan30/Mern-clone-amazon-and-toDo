import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Header.css';
import './Home.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';


function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path="/todoList">
            <Header />
            <InputTodo />
            <ListTodos />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // <Fragment>
    //   
    // </Fragment>
  );
}

export default App;
