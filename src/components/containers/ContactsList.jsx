import React, { Component } from "react";
import ContactItem from "../common/ContactItem";
import { Consumer } from "../../context/context";

export default class ContactsList extends Component {
  getMutualContacts = (contacts, id) => {
    const currentContact = contacts.find(item => item.id === id);
    const mutualContacts = currentContact.mutualContacts;
    const namesArray = [];
    mutualContacts.forEach(mutualContact =>
      contacts.forEach(
        item => item.id === mutualContact && namesArray.push(item.name)
      )
    );
    return namesArray;
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <ContactItem
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  mail={contact.mail}
                  phone={contact.phone}
                  address={contact.address}
                  mutualContacts={this.getMutualContacts(contacts, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
