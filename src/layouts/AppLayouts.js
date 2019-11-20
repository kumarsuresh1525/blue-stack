import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../components/home/Home';

class AppLayout extends Component {
  renderContent = () => {
    return (
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    );
  }

  render() {
    return (
      <Fragment>
        <Header />
        {this.renderContent()}
      </Fragment>
    )
  }
}

export default AppLayout;