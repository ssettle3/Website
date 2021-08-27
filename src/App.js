import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";
import { Blog } from "./components/Blog";
import { Header } from "./components/Header";
import { Theme } from "./components/Theme";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { SocialContacts } from "./components/SocialContacts";

const Body = styled.div`
  padding: 50px;

  @media only screen and (max-width: 600px) {
    padding: 5px;
  }
`;

class App extends Component {
  render() {
    return (
      <Theme>
        <Router>
          <Header />
          <Body>
            <Switch>
              <Redirect from="/website" to="/" />
              <Route exact path="/" component={Home} />
              <Route exact path="/experience" component={AboutMe} />
              <Route exact path="/blog" component={Blog} />
              {/* <Route exact path="/contact" component={Contact} /> */}
              <Route component={NotFound} />
            </Switch>
          </Body>
          <Fragment>
            <SocialContacts />
          </Fragment>
        </Router>
      </Theme>
    );
  }
}

export default App;
