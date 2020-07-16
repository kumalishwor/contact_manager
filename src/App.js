import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "./context";

import Header from "./Components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./Components/contacts/Contacts";
import AddContact from "./Components/contacts/AddContact";
import EditContact from "./Components/contacts/EditContact";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";
import Test from "./Components/test/Test";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
              {/* <AddContact />
              <Contacts /> */}
            </div>
            {/* <Contact
          name="Ishwor kumal"
          email="Ishwor@gmail.com"
          phone="9814158530"
        />
        <Contact
          name="Kishor kumal"
          email="Kishor@gmail.com"
          phone="9814158456"
        />
        <Contact name="Ajay kumal" email="Ajay@gmail.com" phone="9814158452" /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
