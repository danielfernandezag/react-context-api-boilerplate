import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-3 py-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {title}
        </a>
      </div>
      <div>
        <ul className="navbar-nav justify-content-end">
          <li className="navbar-item">
            <a href="/" className="nav-link active">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/" className="nav-link active">
              Add
            </a>
          </li>
          <li className="navbar-item">
            <a href="/" className="nav-link active">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  title: "Undefined Title"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
