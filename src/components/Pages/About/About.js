import React from "react";
import { Item, Label } from "semantic-ui-react";
import pckJson from "../../../../package.json";
import uicaLogo from "../../../assets/UICATransparent.png";
const About = props => {
  return (
    <div
      style={{
        padding: "0 2em",
        borderLeft: "1px solid #eee"
      }}
    >
      <h2
        style={{
          borderBottom: "1px solid #eee",
          padding: "1em 0",
          color: "#006516"
        }}
      >
        About
      </h2>
      <Item.Group divided>
        <Item>
          <Item.Image size="tiny" src={uicaLogo} />

          <Item.Content>
            <Item.Header as="h3">UICA Admin Dashboard</Item.Header>
            <Item.Meta>
              A content management system to help the UICA board manage the
              Masjid's data
            </Item.Meta>
            <Item.Extra>
              <Label>v{pckJson.version}</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};

export default About;
