import React, { useState, useEffect } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import axios from "axios";
import PageContainer from "../../utils/PageContainer";
const PrayersTime = (props) => {
  const [prayersTime, setPrayersTime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    show: false,
    header: "",
    content: "",
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/prayers`)
      .then(({ data: { data } }) => {
        setPrayersTime(data);
      })
      .catch((error) => console.log("Get Prayers Failed", error));
  }, []);

  const handlePrayerTimeChange = ({ target }, id) => {
    const newPrayersTime = prayersTime.map((p) => {
      if (p.id === id) {
        p.time = target.value;
        return p;
      }
      return p;
    });
    setPrayersTime(newPrayersTime);
  };

  const handlePrayerSubmit = async () => {
    setLoading(true);
    const {
      data: { data },
    } = await axios
      .post(`${process.env.REACT_APP_API_URL}/prayers`, prayersTime)
      .catch((error) => {
        setMessage({
          error: true,
          show: true,
          header: "Failed",
          content: "Your new prayers time was not submitted, try again!",
        });
        console.log(error);
      });
    setPrayersTime(data);
    setMessage({
      error: false,
      show: true,
      header: "Time Submitted",
      content: "Your new prayers time has been changed successfully!",
    });
    setLoading(false);
    setTimeout(() => {
      setMessage({
        error: false,
        show: false,
        header: "",
        content: "",
      });
    }, 6000);
  };

  const btnClasses = "ui form ";
  return (
    <PageContainer title="Prayers Time">
      <Form
        className={!loading ? btnClasses : btnClasses + "loading"}
        style={{ padding: "1em" }}
      >
        {prayersTime.length > 0 &&
          prayersTime.map(({ id, name, time }) => (
            <Form.Field key={id}>
              <label>{name}</label>
              <input
                name={name}
                id={id}
                value={time}
                onChange={(e) => handlePrayerTimeChange(e, id)}
                type="time"
              />
            </Form.Field>
          ))}

        <Button
          type="submit"
          className={"ui positive button"}
          onClick={handlePrayerSubmit}
        >
          Submit
        </Button>

        {!message.error && message.show && (
          <Message positive>
            <Message.Header>{message.header}</Message.Header>
            <p>{message.content}</p>
          </Message>
        )}
        {message.error && message.show && (
          <Message negative>
            <Message.Header>{message.header}</Message.Header>
            <p>{message.content}</p>
          </Message>
        )}
      </Form>
    </PageContainer>
  );
};

export default PrayersTime;
