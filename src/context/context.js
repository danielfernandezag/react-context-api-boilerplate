import React, { Component } from "react";
import { Contacts } from "../requests/dummyContacts";

const Context = React.createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.id)
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: Contacts,
    dispatch: action => this.setState(state => Reducer(state, action))
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
