import WorldIDWidget from "@/components/Worldcoin/WorldIDWidget";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <WorldIDWidget action="login" signal="mysignal" active={false} />
    </div>
  );
};

export default page;
