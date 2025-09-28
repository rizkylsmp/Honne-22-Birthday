import React from "react";
import Countdown from "./Countdown";
import Theme from "../Theme/Index";

const Home = () => {
  return (
    <div className="relative">
      <Countdown />
      {/* <div className="fixed md:top-10 bottom-7 right-7 md:right-10">
        <Theme />
      </div> */}
    </div>
  );
};

export default Home;
