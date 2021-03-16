import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Footer from "./components/Footer";
import TopBar from './components/TopBar'

import HomePage from "./pages/HomePage";

function redirectToAdd() {
  window.open("https://discord.com/oauth2/authorize?client_id=704517722100465746&scope=bot&permissions=1346759886", "_self")
}

function redirectToVote() {
  window.open("https://top.gg/bot/704517722100465746", "_self")
}

function redirectToEmbed() {
  window.open("https://davipatricio.github.io/denky-embed-gen/index.html", "_self")
}

function redirectToSupport() {
  window.open("https://discord.gg/bVWdscg", "_self")
}

function Routes({ setDarkMode, darkMode }) {
  return (
    <>
      <TopBar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Router>
        <Switch>
          <Route exact path="/add">
            {redirectToAdd}
          </Route>
          <Route exact path="/vote">
            {redirectToVote}
          </Route>
          <Route exact path="/support">
            {redirectToSupport}
          </Route>
          <Route exact path="/discord">
            {redirectToSupport}
          </Route>
          <Route exact path="/embed">
            {redirectToSupport}
          </Route>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default Routes;
