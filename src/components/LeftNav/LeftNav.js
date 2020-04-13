import React from "react";
import { Grid, Menu, Icon } from "semantic-ui-react";
import menu from "./LeftNavConfig";
const LeftNav = (props) => {
  const handleNavChange = (e, { name }) => {
    window.location.hash = `#${name}`;
  };

  return (
    <Grid.Column style={{ padding: 0 }} width={4}>
      <Menu fluid vertical inverted color="green">
        {menu.map((item) => (
          <Menu.Item
            key={item.path}
            style={{ padding: "1.5em 2em" }}
            name={item.path}
            active={window.location.hash === `#${item.path}`}
            onClick={handleNavChange}
          >
            <Icon size="large" name={item.icon} />
            {item.title}
          </Menu.Item>
        ))}
      </Menu>
    </Grid.Column>
  );
};

export default LeftNav;
