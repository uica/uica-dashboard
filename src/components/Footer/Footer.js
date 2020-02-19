import React from "react";
import { Icon } from "semantic-ui-react";
const Footer = props => {
  const styles = {
    boxShadow: "0 0 5px #ccc",
    padding: "1em",
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0",
    color: "#8a8a8a",
    backgroundColor: "#efffed",
    textAlign: "center"
  };
  return (
    <div style={styles}>
      <p>
        <Icon name="copyright outline" />
        copyright | UICA
      </p>
      <small>Developed by: Muhammad Al Juburi</small>
    </div>
  );
};

export default Footer;
