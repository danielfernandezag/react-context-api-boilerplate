import React, { Component } from "react";
import ContactItem from "../common/ContactItem";
import { Consumer } from '../../context/context';
import { Contacts } from "../../requests/dummyContacts";

export default class ContactsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: Contacts
    }
  }

  handleDeleteContact = (id) => {
    const indexToDelete = this.state.contacts.findIndex(contact => contact.id === id);
    let auxContacts = this.state.contacts;
    auxContacts.splice(indexToDelete,1);
    this.setState({ contacts: auxContacts });
  }

  getMutualContacts = id => {
    const currentContact = Contacts.find(contact => contact.id === id);
    const mutualContacts = currentContact.mutualContacts;
    const namesArray = [];
    mutualContacts.forEach(mutualContact =>
      Contacts.forEach(
        contact => contact.id === mutualContact && namesArray.push(contact.name)
      )
    );
    return namesArray;
  };

  render() {
    return (
      <Consumer>
        {value => {
           const { contacts } = value;
          return(
            <React.Fragment>
            {contacts.map(contact => (
              <ContactItem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                mail={contact.mail}
                phone={contact.phone}
                address={contact.address}
                mutualContacts={this.getMutualContacts(contact.id)}
                handleDeleteContact={this.handleDeleteContact}
              />
            ))}
          </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
