import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css';
import Registration from './Registration';
import Example from './Example';
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
import Home from '../layout/Home';
import PurchasePremium from "../layout/PurchasePremium";
import PurchaseBasic from '../layout/PurchaseBasic';
import PurchaseFree from '../layout/PurchaseFree';
import ResetPassword from './ResetPassword'
import AddingUser from '../layout/AddingUser';
import PageNotFound from './PageNotFound';
export default function AppComponent() {
  let data = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    console.log('tt', data);
  })
  return (
    <>
      <Router>
        <Routes>
          {data ? (
            <>

              <Route exact path='/dashboard/home' element={<Home />}></Route>
              <Route exact path='/forget/password' element={<ForgetPassword />}></Route>
              <Route exact path='/dashboard' element={<Dashboard />}></Route>
              <Route exact path='/dashboard/user' element={<User />}></Route>
              <Route exact path='/dashboard/music' element={<Music />}></Route>
              <Route exact path='/dashboard/adduser' element={<AddUser />}></Route>
              <Route exact path='/dashboard/updateuser/:id' element={<EditUser />}></Route>
              <Route exact path="/dashboard/purchase/premium" element={<PurchasePremium />}></Route>
              <Route exact path="/dashboard/purchase/basic" element={<PurchaseBasic />}></Route>
              <Route exact path='/dashboard/purchase/free' element={<PurchaseFree />}></Route>
            </>
          ) : (
            <>              <Route exact path='/' element={<Registration />}></Route>
              <Route exact path='/login' element={<Login />}></Route>
              <Route exact path='/reset/password/:slug' element={<ResetPassword />}></Route>
              <Route exact path='/addinguser' element={<AddingUser />}></Route>
            </>
          )}
          <Route element={PageNotFound}/>
        </Routes>
      </Router>
    </>
  );
}

if (document.getElementById('example')) {
  ReactDOM.render(<AppComponent />, document.getElementById('example'));
}