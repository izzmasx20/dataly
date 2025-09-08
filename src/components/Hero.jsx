import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="bg-black p-5">
      <h3 className=" text-xl text-green-600 font-semibold text-center uppercase ">
        growing with data analytics
      </h3>
      <h1 className="text-7xl text-white font-bold text-center mt-7 ">
        GROW WITH DATA.
      </h1>
      <h2 className="text-4xl text-white font-bold text-center mt-9 ">
        Fast, Flexible Financing for SASS|
      </h2>
      <h4
        className="text-gray-500
       text-2xl font-bold text-center mt-4"
      >
        Monitor your data analytics to increase revenue for BTB, BTC & SASS{" "}
        <br />
        platforms
      </h4>
      <Button
        content={"Get Started"}
        type={"button"}
        className={
          "bg-green-400 text-black my-6 hover:bg-green-600 hover:text-white block mx-auto"
        }
      />
    </div>
  );
}

export default Hero;
