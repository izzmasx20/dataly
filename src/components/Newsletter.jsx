import React from "react";
import Button from "./Button";

function Newsletter() {
  return (
    <div className="bg-black p-10 flex flex-col lg:flex-row gap-4  justify-between ">
      <div>
        <h1 className="text-white font-bold text-3xl">
          Want tips & tricks to{" "}
          <span className="text-green-600"> optimize</span> your flow?
        </h1>
        <p className="text-white font-semibold mt-2">
          Sign up to our newsletter and stay up to date..
        </p>
      </div>
      <div className=" ">
        <div className="flex flex-col md:flex-row gap-6 ">
          <input
            type="email"
            placeholder="Enter Email"
            className="text-black bg-white border-none p-4  w-[200px] h-[50px] rounded-sm  "
          />

          <Button
            content={"Notify Me"}
            type={"button"}
            className={
              "bg-green-400 text-black  hover:bg-green-600 hover:text-white block "
            }
          />
        </div>
        <div>
          <p className="text-white mt-4">
            We care bout the protection of your data. Read our
            <br /> <span className="text-green-600">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
