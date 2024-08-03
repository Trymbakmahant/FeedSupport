import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Overview from "@/components/Dashboard/Overview";
import CircularProgressBar from "@/components/ui/circularProgressBar";
const page = () => {
  return (
    <div className="flex w-full h-screen">
      <ScrollArea className="h-screen w-full rounded-md border">
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
          <span
            className={`
              w-14 h-14
              rounded-full text-2xl font-semibold flex items-center duration-300 justify-center bg-green-800`}
          >
            U
          </span>
        </div>
        <div className="grid w-full h-[1400px] grid-cols-3 grid-rows-5 gap-0">
          <div className="col-start-1 pt-5 flex flex-col gap-6  col-span-3 row-start-1 row-span-1 ">
            <Overview />
          </div>
          <div className="col-start-1 col-span-1 row-start-2 row-span-1 bg-gray-300">
            Div 2
          </div>
          <div className="col-start-2 col-span-1 row-start-2 row-span-1 bg-gray-400">
            <div>{/* <CircularProgressBar percent={50} title="4.5" /> */}</div>
          </div>
          <div className="col-start-3 col-span-1 row-start-2 row-span-1 bg-gray-500">
            Div 4
          </div>
          <div className="col-start-1 col-span-2 row-start-3 row-span-3 bg-gray-600">
            Div 5
          </div>
          <div className="col-start-3 col-span-1 row-start-3 row-span-1 bg-gray-700">
            Div 6
          </div>
        </div>{" "}
      </ScrollArea>
    </div>
  );
};

export default page;
