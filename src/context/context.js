import React, { Component } from "react";
import { Contacts } from "../requests/dummyContacts";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: Contacts
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;