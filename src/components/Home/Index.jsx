import React from "react";
import Countdown from "./Countdown";
import Theme from "../Theme";

const Home = () => {
  return (
    <div>
      <Countdown />
      <div className="fixed top-4 right-4">
        <Theme />
      </div>
    </div>
  );
};

export default Home;
