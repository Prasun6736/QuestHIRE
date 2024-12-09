import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineWidgets } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full h-[400px] md:h-[500px] flex flex-col items-center justify-center p-6 md:p-10">
        {/* Text above the logo */}
        <div className="text-center z-10 mb-6">
          <h2 className="text-2xl font-extrabold text-blue-600">
            Ace Your Next Interview with Confidence!
          </h2>
          <p className="text-lg md:text-xl text-blue-600">
            Prepare smarter with AI-driven mock interviews and our feedback
          </p>
        </div>

        {/* Image */}
        <div className="relative z-10 flex justify-center items-center">
          <img
            src="/mainlogo.png" // Ensure your image is available at this path
            alt="QuestHire Logo"
            className="w-2/3 md:w-1/2" // Adjust size as needed
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-2 justify-center mt-6 md:mt-10">
          <Link href={"/sign-up"}>
            <Button className="flex justify-center gap-2 bg-blue-600 p-4 md:p-6 text-base md:text-md hover:bg-blue-500 rounded-lg">
              Register Now
              <AiOutlineUser />
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className="flex justify-center gap-2 bg-purple-600 p-4 md:p-6 hover:bg-purple-500 text-base md:text-md rounded-lg">
              Know More
              <MdOutlineWidgets />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
