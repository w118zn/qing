import React from 'react';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import './App.css';
import {QingLayout} from "./layout/layout";

export default class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route  path='/pek3' component={QingLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}
