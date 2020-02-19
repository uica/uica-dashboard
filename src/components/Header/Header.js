import React from "react";
import { Image } from "semantic-ui-react";
import logo from "../../assets/UICATransparent.png";
const Header = props => {
  const styles = {
    boxShadow: "0 0 5px #ccc",
    color: "#8a8a8a",
    padding: "1em 2em",
    backgroundColor: "#efffed"
  };
  return (
    <div style={styles}>
      <Image src={logo} width={150} alt="uica" />
    </div>
  );
};

export default Header;
