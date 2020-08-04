import React from "react";

const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
      }}
    >
      <ul class="">
        <li>
          <a href="/">Meditate</a>
        </li>
        <li>
          <a href="/journal">Journal</a>
        </li>
        <li>
          <a href="/calendar">Calendar</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
