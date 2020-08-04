import React from "react";

const Container = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "Center",
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
