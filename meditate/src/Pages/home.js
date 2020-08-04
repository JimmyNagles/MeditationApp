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
      <Container clase="container  ">
        <Timer></Timer>
      </Container>
    </div>
  );
};

export default Home;
