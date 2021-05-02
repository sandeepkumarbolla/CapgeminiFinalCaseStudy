import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index'; 
import admin from './pages/admin';
import Contact from './pages/contact';
import SignIn from './pages/signIn';
import signup from './pages/signup';
import booking from './pages/booking';
import updateTrain from './pages/updateTrain';
import createTrain from './pages/createTrain';
import passengerdata from './pages/passengerdata';
import search from './pages/search';
import bookingconfirm from './pages/bookingconfirm';

function App() {
  return (
    <Router>
      <Navbar  sticky="top"/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' component={admin} />
        <Route path='/booking' component={booking} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={signup} />
        <Route path='/updatetrain/:trainNumber' component={updateTrain}/>
        <Route path = "/addtrain" component = {createTrain}></Route>
        <Route path = "/passengers" component = {passengerdata}></Route>
        <Route path = "/search" component = {search}></Route>
        <Route path="/confirmbooking/:trainNumber" component={bookingconfirm}></Route>

      </Switch>
    </Router>
  );
}

export default App;
