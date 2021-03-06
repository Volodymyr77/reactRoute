import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import {Fragment} from "react";
import {NavLink} from "react-router-dom";

import Users from "./components/Users";
import {Posts} from "./components/Posts";
import User from "./components/User";
import {Error} from "./components/error";





function App() {
  return (
      <>
    <div>
      <NavLink exact to="/" activeClassName = {'secondActive'} >Home</NavLink> <br/>
      <NavLink to="/users">Users</NavLink> <br/>
      <NavLink to={{
        pathname: '/posts',
        search: '?a=1&b=2',
        hash: 'hash'
      }}>Posts</NavLink>
    </div>
    <div >
    <Switch>
      <Route path='/users/:id' component={User} />
      <Route path='/users' component={Users} />
      <Route path='/posts' component={Posts} />
      <Route exact path='/' render={ () => <h1>Hello world</h1> } />
      <Route render={() => <Error/> } />

      {/*<Redirect to={'/'} />*/}

    </Switch>
    </div>
          </>
  );
}

export default App;
