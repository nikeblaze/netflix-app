import React, { Component } from "react";
import AppBar from "../AppBar/AppBar";
import AppLogo from "../AppLogo/AppLogo";
import NavItem from "../NavItem/NavItem";
import LoginBtn from "../LoginBtn/LoginBtn";
import logo from "../assets/netflix-logo.svg";
import "./NetflixMain.css";
import { render } from "@testing-library/react";
import AppClock from "../AppClock/AppClock";
import AppCounter from "../AppCounter/AppCounter";
import AppToDo from "../AppTodo/AppToDo";
import AppTestList from "../AppTestList/AppTestList";
import AppTestList2 from "../AppTestList2/AppTestList2";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  withRouter,
} from "react-router-dom";
import MagazineList from "../MagazineList/MagazineList";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import Home from "../Home/Home";
import MyList from "../MyList/MyList";
import MyListContext, { MyListProvider } from "../context/MyListContext";
import ShowDetailView from "../ShowDetailView/ShowDetailView";
import ShowDetailFunc from "../ShowDetail(Func)/ShowDetailFunc";
import UserContext from "../context/UserContext";

class NetflixMain extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      userName: null,
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
      userName: "Naqiuddin",
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
      userName: null,
    });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <LogoutBtn logout={this.logout} />
    ) : (
      <LoginBtn login={this.login} />
    );

    return (
      <Router>
        <div className="main-page">
          <AppBar>
            <AppLogo logo={logo} />
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink to="/myList">My List</NavLink>
            {button}
          </AppBar>
          <Switch>
            <UserContext.Provider value={this.state.userName}>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/shows/:id/:name?" exact>
                <ShowDetailFunc />
              </Route>
              <Route path="/myList" exact>
                <MyList />
              </Route>
            </UserContext.Provider>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NetflixMain;
