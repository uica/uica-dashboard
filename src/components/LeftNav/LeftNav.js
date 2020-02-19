import React from "react";
import { Grid, Menu, Icon } from "semantic-ui-react";
const LeftNav = ({ activeNav, handleNavChange }) => {
  return (
    <Grid.Column style={{ padding: 0 }} width={4}>
      <Menu fluid vertical inverted color="green">
        <Menu.Item
          style={{ padding: "2em" }}
          name="prayers"
          active={activeNav === "prayers"}
          onClick={handleNavChange}
        >
          <Icon name="clock" />
          Prayers Time
        </Menu.Item>
        <Menu.Item
          style={{ padding: "2em" }}
          name="about"
          active={activeNav === "about"}
          onClick={handleNavChange}
        >
          <Icon name="info circle" />
          About
        </Menu.Item>
      </Menu>
    </Grid.Column>
  );
};

export default LeftNav;
