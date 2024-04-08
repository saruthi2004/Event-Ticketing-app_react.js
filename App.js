import React from 'react';
import './App.css';
import Product from './Components/Product';
import Form from './Components/Form';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <Switch>
                  <Route path="/" exact component={Product}></Route>
                  <Route path="/:id" component={Form}></Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
