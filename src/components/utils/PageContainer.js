import React from "react";

const PageContainer = (props) => {
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
        {props.title}
      </h2>
      {props.children}
    </div>
  );
};

export default PageContainer;
