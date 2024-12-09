import React from "react";
import { SiGooglegemini } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiDrizzle } from "react-icons/si";

const AIpower = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-14 justify-between w-full p-14">
        {/* Main Heading and Description */}
        <div className="md:text-4xl text-3xl font-extrabold text-gray-700 md:mt-10">
          <span className="text-purple-600">Tech Insights:</span>{" "}
          <span className="text-blue-600">The Technology Behind QuestHIRE</span>
          <p className="text-xl font-medium text-md md:text-justify my-5">
          At QuestHIRE, we leverage a range of advanced tools and technologies to deliver an immersive, AI-driven mock interview experience. Let’s take a closer look at the key elements that power QuestHIRE.
          </p>
        </div>

        {/* Technology Details */}
        <div className="grid md:grid-cols-2 gap-3 p-5">
          {/* Gemini AI */}
          <div className="bg-white border-4 border-blue-500 p-4 text-gray-800 md:h-[200px] rounded-xl shadow-md">
            <span className="flex gap-2 text-xl font-semibold text-blue-600">
              <SiGooglegemini className="bg-slate-200 w-6 h-6 p-1 rounded-full text-blue-700" />
              Gemini AI
            </span>
            <p className="text-md my-2">
            QuestHIRE leverages Gemini AI, an advanced engine that crafts customized, position-specific interview questions.
            </p>
          </div>

          {/* Next.js */}
          <div className="bg-white border-4 border-blue-500 p-4 text-gray-800 md:h-[200px] rounded-xl shadow-md">
            <span className="flex gap-2 text-xl font-semibold text-blue-600">
              <RiNextjsFill className="bg-slate-200 w-6 h-6 p-1 rounded-full text-zinc-800" />
              Next.js
            </span>
            <p className="text-md my-2">
            QuestHIRE utilizes Next.js, a robust React framework that enables server-side rendering (SSR) for enhanced performance and SEO.
            </p>
          </div>

          {/* React */}
          <div className="bg-white border-4 border-blue-500 p-4 text-gray-800 md:h-[200px] rounded-xl shadow-md">
            <span className="flex gap-2 text-xl font-semibold text-blue-600">
              <FaReact className="bg-slate-200 w-6 h-6 p-1 rounded-full text-sky-500" />
              React
            </span>
            <p className="text-md my-2">
           
               The user interface is developed using React, a widely-used library for creating dynamic and interactive web applications.
            </p>
          </div>

          {/* Drizzle ORM */}
          <div className="bg-white border-4 border-blue-500 p-4 text-gray-800 md:h-[200px] rounded-xl shadow-md">
            <span className="flex gap-2 text-xl font-semibold text-blue-600">
              <SiDrizzle className="bg-slate-200 w-6 h-6 p-1 rounded-full text-green-600" />
              Drizzle ORM
            </span>
            <p className="text-md my-2">
            For handling all database operations, we utilize Drizzle ORM, a modern and type-safe ORM. Drizzle ORM ensures reliability and consistency throughout our database layer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIpower;
