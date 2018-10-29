import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { title } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {title}
        </a>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/" className="nav-link">
              Link1
            </a>
          </li>
          <li className="navbar-item">
            <a href="/" className="nav-link">
              Link2
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
