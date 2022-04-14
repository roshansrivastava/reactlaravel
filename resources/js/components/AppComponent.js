import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css';
import Registration from './Registration';
import Example  from './Example';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Dashboard from './Dashboard';
import User from '../layout/User';
import Music from '../layout/Music';
import AddUser from "../layout/AddUser";
import EditUser from "../layout/EditUser";
// import AuthService from 

export default class AppComponent extends Component {
  render() {
    return (
      <>
      <Router>
          <Routes>
              <Route exact path='/'element={<Registration/>}></Route>
              <Route exact path='/login' element={<Login/>}></Route>
              <Route exact path='/forget-password'element={<ForgetPassword/>}></Route>
              <Route exact path='/dashboard'element={<Dashboard/>}></Route>
              <Route exact path='/dashboard/user'element={<User/>}></Route>
              <Route exact path='/dashboard/music'element={<Music/>}></Route>
              <Route exact path='/dashboard/adduser'element={<AddUser/>}></Route>
              <Route exact path='/dashboard/updateuser/:id'element={<EditUser/>}></Route>
          </Routes> 
      </Router>
      
      </>
    )
  }
}

if (document.getElementById('example')) {
    ReactDOM.render(<AppComponent />, document.getElementById('example'));
}