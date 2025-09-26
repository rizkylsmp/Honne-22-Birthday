import React from "react";
import Countdown from "./Countdown";
import Theme from "../Theme/Index";

const Home = () => {
  return (
    <div className="relative md:px-0 px-5">
      <Countdown />
      <div className="fixed md:top-4 bottom-7 right-7 md:right-4">
        <Theme />
      </div>
    </div>
  );
};

export default Home;
