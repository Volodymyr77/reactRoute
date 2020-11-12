import React from 'react';
import './App.css';
import {Route} from "react-router";
import {Fragment} from "react";
import {NavLink} from "react-router-dom";

import Users from "./components/Users";
import {Posts} from "./components/Posts";




function App() {
  return (
      <>
    <div>
      <NavLink exact to="/">Home</NavLink> <br/>
      <NavLink to="/users">Users</NavLink> <br/>
      <NavLink to={{
        pathname: '/posts',
        search: '?a=1&b=2',
        hash: 'hash'
      }}>Posts</NavLink>
    </div>
    <div >

      <Route exact path='/' render={ () => <h1>Hello world</h1> } />
      <Route path='/users' component={Users} />
      <Route path='/posts' component={Posts} />
    </div>
          </>
  );
}

export default App;
