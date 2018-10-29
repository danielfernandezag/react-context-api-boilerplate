import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context/context";

class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactInfo: false
    };
  }

  handleShowContactInfo = () =>
    this.setState({ showContactInfo: !this.state.showContactInfo });

  handleDeleteContact = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', id: id});
  };

  render() {
    const { name, mail, phone, address, mutualContacts, id } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                {this.state.showContactInfo ? (
                  <i
                    className="fas fa-angle-down"
                    style={{ cursor: "pointer", color: "lightblue" }}
                    onClick={this.handleShowContactInfo}
                  />
                ) : (
                  <i
                    className="fas fa-angle-right"
                    style={{ cursor: "pointer", color: "lightblue" }}
                    onClick={this.handleShowContactInfo}
                  />
                )}{" "}
                <i
                  className="fas fa-times"
                  style={{ float: "right", cursor: "pointer", color: "red" }}
                  onClick={() => this.handleDeleteContact(id, dispatch)}
                />
              </h4>
              {this.state.showContactInfo && (
                <React.Fragment>
                  <ul className="list-group">
                    <li className="list-group-item">{`Mail: ${mail}`}</li>
                    <li className="list-group-item">{`Phone: ${phone}`}</li>
                    <li className="list-group-item">{`Address: ${
                      address.st
                    } City: ${address.city}`}</li>
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
        }}
      </Consumer>
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
