import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const DashbaordNavbar = () => {
  return (
    <div className="w-full px-4 py-5 bg-secondary flex justify-between">
      <div className="flex gap-2 items-center">
        <span
          className={`
         text-xl w-14 h-14
        rounded-full flex items-center duration-300 justify-center bg-green-300`}
        >
          FBS
        </span>
        <span className="text-2xl font-semibold">FeedSupport</span>
      </div>

      <ConnectButton />
    </div>
  );
};

export default DashbaordNavbar;
