import GameBox from "@/components/Sipline/GameBox";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-between h-screen overflow-hidden ">
      <div className="flex-1">
        <GameBox />
      </div>
      <div className=" relative bg-primary justify-center flex items-center flex-1">
        <h1 className="absolute right-10 text-secondary underline  underline-offset-2 laptop:text-5xl top-10">
          FeedSupport
        </h1>
        <form action=""></form>
      </div>
    </div>
  );
};

export default page;
