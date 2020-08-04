import React from "react";
import Container from "../components/Grid/Container";
import Timer from "../components/Features/Timer";

const Home = () => {
  return (
    <div>
      <Container>
        <h3>Content Home</h3>
      </Container>
      <Container clase="container ">
        <Timer></Timer>
      </Container>
    </div>
  );
};

export default Home;
