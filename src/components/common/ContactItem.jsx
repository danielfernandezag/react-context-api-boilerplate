import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactInfo: false
    };
  }

  handleShowContactInfo = () =>
    this.setState({ showContactInfo: !this.state.showContactInfo });
  handleDeleteContact = () => this.props.handleDeleteContact(this.props.id);

  render() {
    const { name, mail, phone, address, mutualContacts } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          {this.state.showContactInfo ? (
            <i
              className="fas fa-angle-down"
              onClick={this.handleShowContactInfo}
            />
          ) : (
            <i
              className="fas fa-angle-right"
              onClick={this.handleShowContactInfo}
            />
          )}{" "}
          <i className="fas fa-times" onClick={this.handleDeleteContact} />
        </h4>
        {this.state.showContactInfo && (
          <React.Fragment>
            <ul className="list-group">
              <li className="list-group-item">{`Mail: ${mail}`}</li>
              <li className="list-group-item">{`Phone: ${phone}`}</li>
              <li className="list-group-item">{`Address: ${address.st} City: ${
                address.city
              }`}</li>
            </ul>
            {mutualContacts.length !== 0 && (
              <React.Fragment>
                <label>Mutual Contacts</label>
                <ul className="list-group">
                  {mutualContacts.map(contact => (
                    <li className="list-group-item" key={contact}>
                      {contact}
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

ContactItem.defaultProps = {
  name: "Undefined Name",
  mail: "Undefined mail",
  phone: "Undefined phone",
  address: "Undefined address",
  mutualContacts: []
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  mutualContacts: PropTypes.array.isRequired
};

export default ContactItem;
