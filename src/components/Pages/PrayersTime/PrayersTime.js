import React from "react";
import { Form, Button, Message } from "semantic-ui-react";

const PrayersTime = ({
  message,
  loading,
  prayerTime,
  handlePrayerSubmit,
  handlePrayerTimeChange,
}) => {
  const btnClasses = "ui form ";
  return (
    <div
      style={{
        padding: "0 2em",
        marginBottom: "10em",
        borderLeft: "1px solid #eee",
      }}
    >
      <h2
        style={{
          borderBottom: "1px solid #eee",
          padding: "1em 0",
          color: "#006516",
        }}
      >
        Prayers Time
      </h2>
      <Form
        className={!loading ? btnClasses : btnClasses + "loading"}
        style={{ padding: "1em" }}
      >
        {prayerTime.length > 0 &&
          prayerTime.map(({ id, name, time }) => (
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
    </div>
  );
};

export default PrayersTime;
