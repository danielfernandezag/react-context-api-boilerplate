import React, { Component } from "react";
import Header from "./containers/Header";
import ContactsList from './containers/ContactsList';
import "../css/App.css";

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Header title="Contact Manager Demo" />
        <div className="container">
         <ContactsList/>
        </div>
      </div>
    );
  }
}

export default App;
