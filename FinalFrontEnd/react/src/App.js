import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import booking from "./components/booking";
import updateTrain from "./components/updateTrain";
import passengerdata from './components/passengerdata';
import search from './components/search';
import Contact from './components/contact';
import createTrain from './components/createTrain';
import bookingconfirm from './components/bookingconfirm';  
import index from './components/index';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div class="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Railways
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
                
              </li>
              
            )}
             {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/addtrain"} className="nav-link">
                add Train
                </Link>
                
              </li>
              
            )}

              {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/passengers"} className="nav-link">
                passengers
                </Link>
                
              </li>
              
            )}

            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
            {currentUser && (
              <li className="nav-item">
                <Link to={"/booking"} className="nav-link">
                  Booking
                </Link>
              </li>
            )}
          </div>
          

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li> */}
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
        
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={index} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/booking" component={booking}/>
            <Route path='/pnr' component={Contact} />
            <Route path='/updatetrain/:trainNumber' component={updateTrain}/>
            <Route path = "/addtrain" component = {createTrain}></Route>
            <Route path = "/passengers" component = {passengerdata}></Route>
            <Route path = "/search" component = {search}></Route>
            <Route path="/confirmbooking/:trainNumber" component={bookingconfirm}></Route>
          </Switch>
        </div>
        </div>
      
    );
  }
}

export default App;
