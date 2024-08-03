import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
const page = () => {
  return (
    <div className="flex w-full h-screen">
      <ScrollArea className="h-screen w-full rounded-md border">
        <div className="grid w-full h-[1400px] grid-cols-3 grid-rows-5 gap-0">
          <div className="col-start-1 col-span-3 row-start-1 row-span-1 bg-gray-200">
            Div 1
          </div>
          <div className="col-start-1 col-span-1 row-start-2 row-span-1 bg-gray-300">
            Div 2
          </div>
          <div className="col-start-2 col-span-1 row-start-2 row-span-1 bg-gray-400">
            Div 3
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
