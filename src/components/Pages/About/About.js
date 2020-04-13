import React from "react";
import { Item, Label } from "semantic-ui-react";
import pckJson from "../../../../package.json";
import uicaLogo from "../../../assets/UICATransparent.png";
import PageContainer from "../../utils/PageContainer";
const About = (props) => {
  return (
    <PageContainer title="About">
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
    </PageContainer>
  );
};

export default About;
