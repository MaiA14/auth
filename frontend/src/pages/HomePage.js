import React from "react";
import Header from '../components/Header';
import Login from '../components/Login';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

export const HomePage = () => {

  let history = useHistory();

  return (
    <React.Fragment>
        <Header/>
        <Login history={history}/>
      </React.Fragment>
    );
  };

  