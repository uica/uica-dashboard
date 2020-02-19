import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";

import Header from "./components/Header/Header";
import LeftNav from "./components/LeftNav/LeftNav";
import PrayersTime from "./components/Pages/PrayersTime/PrayersTime";
import About from "./components/Pages/About/About";
import Footer from "./components/Footer/Footer";
function App() {
  const [prayersTime, setPrayersTime] = useState([]);
  const [message, setMessage] = useState({
    error: false,
    show: false,
    header: "",
    content: ""
  });
  const [activeNav, setActiveNav] = useState("prayers");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/prayers")
      .then(({ data }) => {
        setPrayersTime(data);
      })
      .catch(error => console.log("Get Prayers Failed", error));
  }, []);

  const handleNavChange = (e, { name }) => setActiveNav(name);

  const handlePrayerSubmit = async () => {
    setLoading(true);
    const { data } = await axios
      .post("http://localhost:5000/api/prayers", prayersTime)
      .catch(error => {
        setMessage({
          error: true,
          show: true,
          header: "Failed",
          content: "Your new prayers time was not submitted, try again!"
        });
        console.log(error);
      });
    setPrayersTime(data);
    setMessage({
      error: false,
      show: true,
      header: "Time Submitted",
      content: "Your new prayers time has been changed successfully!"
    });
    setLoading(false);
    setTimeout(() => {
      setMessage({
        error: false,
        show: false,
        header: "",
        content: ""
      });
    }, 6000);
  };

  const handlePrayerTimeChange = ({ target }, id) => {
    const newPrayersTime = prayersTime.map(p => {
      if (p.id === id) {
        p.time = target.value;
        return p;
      }
      return p;
    });
    setPrayersTime(newPrayersTime);
  };
  return (
    <React.Fragment>
      <Header />
      <Grid>
        <Grid.Row>
          <LeftNav activeNav={activeNav} handleNavChange={handleNavChange} />
          <Grid.Column style={{ padding: 0 }} width={12}>
            {activeNav === "prayers" && (
              <PrayersTime
                message={message}
                loading={loading}
                prayerTime={prayersTime}
                handlePrayerSubmit={handlePrayerSubmit}
                handlePrayerTimeChange={handlePrayerTimeChange}
              />
            )}
            {activeNav === "about" && <About />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default App;
