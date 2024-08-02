"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const Navbar: React.FC = () => {
  const router = useRouter();
  const navbarRef = useRef<HTMLDivElement>(null);
  const timeline = gsap.timeline();

  useGSAP(() => {
    const showAnim = gsap
      .from("#navbar", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

  const OfftheNav = () => {
    timeline.to(".navoption", {
      yPercent: 130,
      duration: 1,
    });
    timeline.to(".navBox", {
      yPercent: -100,
      duration: 0.6,
    });
  };

  const handleMenuOn = () => {
    gsap.to(".navBox", {
      yPercent: 100,
      duration: 0.3,
      delay: 0,
    });
    gsap.to(".navoption", {
      yPercent: -130,

      duration: 1,
    });
  };

  return (
    <div
      id="navbar"
      ref={navbarRef}
      className="fixed  top-0 bg-black/20 backdrop-blur-md left-0 w-full flex justify-center p-4 shadow-md z-50"
    >
      <div className="fixed  translate-y-[-100%] z-50  navBox top-0 p-11 left-0 w-screen h-screen bg-black/90 backdrop-blur-2xl ">
        <div className="w-full h-12  flex justify-end">
          <button
            onClick={() => {
              OfftheNav();
            }}
          >
            <X size={50} />
          </button>
        </div>
        <div className="flex md:h-fit h-[90%]  overflow-hidden    flex-col  gap-6">
          <div
            onClick={() => {
              router.push("/auth/login");
            }}
            className=" hover:text-purple-500 h-16   overflow-hidden     text-center  cursor-pointer "
          >
            <h3 className="md:text-5xl text-3xl   navoption  translate-y-[130%]">
              Login
            </h3>
          </div>

          <div
            onClick={() => {
              router.push("/auth/signup");
            }}
            className=" hover:text-purple-500 h-16 overflow-hidden  text-center w-full  cursor-pointer "
          >
            <h3 className="md:text-5xl text-3xl  translate-y-[130%]  navoption">
              Signup
            </h3>
          </div>
        </div>
      </div>
      <div className="flex  justify-between w-full md:w-[1400px]    items-center">
        <div className="flex gap-2 items-center">
          <h1 className="text-white font-semibold md:text-3xl text-xl">
            FeedSupport
          </h1>
        </div>

        <button
          className=""
          onClick={() => {
            handleMenuOn();
          }}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41 7L41 3C41 1.89543 40.1046 1 39 1L35 1"
              stroke="#FAFAFA"
              strokeOpacity="0.64"
            ></path>
            <path
              d="M41 35V39C41 40.1046 40.1046 41 39 41H35"
              stroke="#FAFAFA"
              strokeOpacity="0.64"
            ></path>
            <path
              d="M7 41L3 41C1.89543 41 1 40.1046 1 39L1 35"
              stroke="#FAFAFA"
              strokeOpacity="0.64"
            ></path>
            <path
              d="M1 7L1 3C1 1.89543 1.89543 1 3 1L7 1"
              stroke="#FAFAFA"
              strokeOpacity="0.64"
            ></path>
            <path d="M11 14L31 14" stroke="#FAFAFA" strokeWidth="2"></path>
            <path d="M11 21L23 21" stroke="#FAFAFA" strokeWidth="2"></path>
            <path d="M11 28L31 28" stroke="#FAFAFA" strokeWidth="2"></path>
          </svg>
        </button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
