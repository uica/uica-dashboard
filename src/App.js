import React from "react";
import { HashRouter, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Pages from "./components/Pages/Pages";
function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Pages />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
