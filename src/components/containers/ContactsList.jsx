import React, { Component } from "react";
import ContactItem from "../common/ContactItem";
import { Contacts } from "../../requests/dummyContacts";

export default class ContactsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: Contacts
    }
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
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            mail={contact.mail}
            phone={contact.phone}
            address={contact.address}
            mutualContacts={this.getMutualContacts(contact.id)}
          />
        ))}
      </div>
    );
  }
}
