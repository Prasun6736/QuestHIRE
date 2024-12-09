"use client";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  });
  const router = useRouter();
  const { isSignedIn } = useUser();

  const NavigateToDashboard = () => {
    router.push("/dashboard/");
  };
  const NavigateToHome = () => {
    router.push("/");
  };
  const NavigateToAboutDeveloper = () => {
    router.push("/aboutdeveloper/");
  };
  const NavigateToHowItWorks = () => {
    router.push("/#howitworks");
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm text-blue-600 p-4 flex justify-between items-center">
      {/* Logo and Navigation */}
      <div className="flex gap-10">
        <Image
          src="/mainlogo.png"
          width={40}
          height={40}
          alt="CareerBoost-AI Logo"
        />
        <ul className="hidden md:flex gap-2 font-semibold">
          <li
            className={`flex gap-1 font-extrabold hover:bg-blue-800 hover:rounded-md hover:text-blue-200 pr-4 pl-4 text-center transition-all cursor-pointer p-2 ${
              path == "/" ? "text-blue-600" : ""
            }`}
            onClick={NavigateToHome}
          >
            <span className="p-1">
              <AiFillHome className="w-4 h-4" />
            </span>
            Home
          </li>
          <li
            className={`flex gap-1 font-extrabold pr-4 pl-4 hover:bg-blue-800 hover:rounded-md hover:text-blue-200 transition-all cursor-pointer p-2 ${
              path == "/dashboard" ? "text-blue-600" : ""
            }`}
            onClick={NavigateToDashboard}
          >
            <span className="p-1">
              <MdDashboardCustomize className="w-4 h-4" />
            </span>
            Dashboard
          </li>
          <li
            className={`flex gap-1 font-extrabold pr-4 pl-4 hover:bg-blue-800 hover:rounded-md hover:text-blue-200 transition-all cursor-pointer p-2 ${
              path == "/#howitworks" ? "text-blue-600" : ""
            }`}
            onClick={NavigateToHowItWorks}
          >
            <span className="p-1">
              <BsFillQuestionSquareFill className="w-4 h-4" />
            </span>
            How it works
          </li>
          <li
            className={`flex gap-1 font-extrabold pr-4 pl-4 hover:bg-blue-800 hover:rounded-md hover:text-blue-200 transition-all cursor-pointer p-2 ${
              path == "/aboutdeveloper" ? "text-blue-600" : ""
            }`}
            onClick={NavigateToAboutDeveloper}
          >
            <span className="p-1">
              <FaUserCircle className="w-4 h-4" />
            </span>
            About Developer
          </li>
        </ul>
      </div>

      {/* Login/SignIn Button */}
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div
          className={`flex gap-1 font-extrabold pr-4 pl-4 hover:bg-blue-800 hover:rounded-md hover:text-blue-200 transition-all cursor-pointer p-2`}
        >
          <SignInButton>
            <span className="flex items-center gap-2">
              <FaUser className="w-4 h-4" />
              Login
            </span>
          </SignInButton>
        </div>
      )}
    </div>
  );
}

export default Header;
