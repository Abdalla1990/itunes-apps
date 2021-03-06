
import {Router, Route,Switch } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import loadAppDefaultState from '../components/tools/loadAppDefaultState';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import history from '../components/tools/history';
import HomePage from '../components/HomePage';
import AppPage from '../components/AppPage';

const AppRouter = () =>  {

  const dispatch= useDispatch();
  useEffect( () => {
    loadAppDefaultState(dispatch)
  },[])
  return (
  <Router history={history} >
      <div className="app-container" >
          <Menu />
          <div id="component-container" className="component-container" >
            <Switch>
              <Route  path="/apps/:appId" component={AppPage} exact={true}/>
              <Route  path="/" component={HomePage} />
            </Switch>
          </div>
          <Footer />
      </div>
  </Router>
  
  )
} ;


export default AppRouter ;
