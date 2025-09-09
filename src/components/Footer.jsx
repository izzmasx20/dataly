import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineDribbble } from "react-icons/ai";
import { GrGithub } from "react-icons/gr";
import { LuTwitter } from "react-icons/lu";

function Footer() {
  return (
    <footer className=" bg-black text-white  p-5">
      <div className=" layout flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-green-600 ">DATALY.</h1>
          <p className="mt-4 text-gray-300 w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex gap-8 flex-row mt-8">
            <a href="">
              {" "}
              <FaFacebook size={30} />
            </a>
            <a href="">
              <FaInstagram size={30} />
            </a>
            <a href="">
              <LuTwitter size={30} />
            </a>
            <a href="">
              <GrGithub size={30} />
            </a>
            
            <a href="">
              <AiOutlineDribbble size={30} />
            </a>
          </div>
        </div>
        <div className="flex justify-between gap-5 w-full text-sm md:text-xl ">
          <div className="flex flex-col gap-3">
            <h1 className=" text-gray-300 font-bold  ">Solutions</h1>
            <h1 className="">Analytics</h1>
            <h1 className="">Marketing </h1>
            <h1 className="">Commerce</h1>
            <h1 className="">Insights</h1>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" text-gray-300 ">Support</h1>
            <h1 className="">Pricing</h1>
            <h1 className="">Documentation</h1>
            <h1 className="">Guides API Status</h1>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" text-gray-300 ">Company</h1>
            <h1 className="">About</h1>
            <h1 className="">Blog</h1>
            <h1 className="">Jobs</h1>
            <h1 className="">Press</h1>
            <h1 className=""> Careers</h1>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className=" text-gray-300 ">Legal</h1>
            <h1 className="">Claim</h1>
            <h1 className="">Policy</h1>
            <h1 className="">Terms</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
