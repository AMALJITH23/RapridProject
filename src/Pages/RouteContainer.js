import React from 'react';
import './../App.css'
import UserInfo from './Info';
import Users from './Users';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

const RouteContainer = () => {
    return (
        <div >
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/users" exact component={Users} />
          <Route path="/user-info" component={UserInfo} />
        </Switch>
        </div>
    )
}

export default RouteContainer;