// Code by Utsav Patel
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Header from "../dashboard/_components/Header";
import Footer from "../dashboard/_components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <div className="w-full py-20">
        {/* Grid Layout for the four cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8">
          {/* Card 1 */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-xl">
              <img
                alt="Profile 1"
                src="/pic.jpeg"
                className="h-52 w-52 rounded-full object-cover mx-auto"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-blue-600">About Me</h3>
                <p className="mt-2 text-lg text-blue-700 font-semibold">
                  xyz.. intro
                </p>
                <div className="mt-5 flex gap-3 justify-center">
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-pink-500 hover:text-white p-2 rounded-lg"
                  >
                    <FaInstagram className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-slate-900 hover:text-white p-2 rounded-lg"
                  >
                    <FiGithub className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded-lg"
                  >
                    <FaLinkedinIn className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-xl">
              <img
                alt="Profile 2"
                src="/mypic2.jpeg"
                className="h-52 w-52 rounded-full object-cover mx-auto"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-blue-600">About Me</h3>
                <p className="mt-2 text-lg text-blue-700 font-semibold">
                xyz.. intro
                </p>
                <div className="mt-5 flex gap-3 justify-center">
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-pink-500 hover:text-white p-2 rounded-lg"
                  >
                    <FaInstagram className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-slate-900 hover:text-white p-2 rounded-lg"
                  >
                    <FiGithub className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded-lg"
                  >
                    <FaLinkedinIn className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-xl">
              <img
                alt="Profile 3"
                src="/mypic3.jpeg"
                className="h-52 w-52 rounded-full object-cover mx-auto"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-blue-600">About Me</h3>
                <p className="mt-2 text-lg text-blue-700 font-semibold">
                xyz.. intro
                </p>
                <div className="mt-5 flex gap-3 justify-center">
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-pink-500 hover:text-white p-2 rounded-lg"
                  >
                    <FaInstagram className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-slate-900 hover:text-white p-2 rounded-lg"
                  >
                    <FiGithub className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded-lg"
                  >
                    <FaLinkedinIn className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md p-6 shadow-lg bg-white rounded-xl">
              <img
                alt="Profile 4"
                src="/me.jpeg"
                className="h-52 w-52 rounded-full object-cover mx-auto"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-blue-600">About Me</h3>
                <p className="mt-2 text-lg text-blue-700 font-semibold">
                   Full-Stack and ML model Developer, specializing in frontend and building ML-MODELs.
                </p>
                <div className="mt-5 flex gap-3 justify-center">
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-pink-500 hover:text-white p-2 rounded-lg"
                  >
                    <FaInstagram className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-slate-900 hover:text-white p-2 rounded-lg"
                  >
                    <FiGithub className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded-lg"
                  >
                    <FaLinkedinIn className="text-blue-600" style={{ fontSize: "30px" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
