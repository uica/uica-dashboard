import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import PrayersTime from "./PrayersTime/PrayersTime";
import LeftNav from "../LeftNav/LeftNav";
import About from "./About/About";
import MobileApp from "./MobileApp/MobileApp";

const Pages = () => {
  return (
    <Grid>
      <Grid.Row>
        <LeftNav />
        <Grid.Column style={{ padding: 0 }} width={12}>
          <Route exact path="/" component={PrayersTime} />
          <Route exact path="/mobile_app" component={MobileApp} />
          <Route path="/about" component={About} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Pages;
