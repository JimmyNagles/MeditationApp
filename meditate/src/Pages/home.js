import React from "react";
import Container from "../components/Grid/Container";
import Timer from "../components/Features/Timer";

const Home = () => {
  return (
    <div>
      <Container>
        <h3
          style={{
            border: "3px black solid",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          Clear your mind and control your thoughts
        </h3>
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",

          border: "3px solid black",
          padding: "20px ",
          borderRadius: "10px",
          flexWrap: "wrap",
          margin: "20px",
          boxShadow: "0 0 30px 8px rgba(0,0,0,20.06);",
          flexShrink: "3",
        }}
      >
        <Timer />
      </div>
    </div>
  );
};

export default Home;
