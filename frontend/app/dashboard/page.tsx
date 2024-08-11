import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Overview from "@/components/Dashboard/Overview";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  Info,
  CheckCircle,
  CircleArrowOutUpRight,
} from "lucide-react";
import { FeedbackList } from "@/components/Dashboard/FeedbackList";
import { RecentSupports } from "@/components/Dashboard/RecentSupports";
import { Button } from "@/components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import DashbaordNavbar from "@/components/DashbaordNavbar";
import { FeedBackCreationList } from "@/components/Dashboard/FeedBackCreationList";
const page = () => {
  return (
    <div className=" overflow-hidden w-full h-screen">
      <DashbaordNavbar />
      <ScrollArea className="h-screen w-full rounded-md border">
        {/* <div className="w-full px-4 py-5 bg-secondary flex justify-between">
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
        </div> */}
        <div className="grid w-full h-[320px] grid-cols-3 grid-rows-1 gap-0">
          <div className="col-start-1 pt-5 flex flex-col gap-6  col-span-3 row-start-1 row-span-1 ">
            <Overview />
          </div>
        </div>
        <div className="w-full px-5 bg-secondary gap-2 flex h-screen">
          <div className="w-[300px]  flex flex-col gap-4 items-center my-3 ">
            <span className="text-3xl font-bold  "> Guid book </span>
            <Separator className=" bg-primary" />
            <div className="mb-4 p-4 rounded-lg bg-red-100  text-black flex items-center">
              <AlertCircle className="text-red-500 size-24 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-red-500">
                  Low (1.0 - 2.5)
                </h3>
                <p>
                  This rating range indicates significant issues or concerns.
                  Improvements are needed.
                </p>
              </div>
            </div>

            <div className="mb-4 p-4 rounded-lg text-black bg-yellow-100 flex items-center">
              <Info className="text-yellow-500 size-24  mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-500">
                  Medium (2.6 - 3.9)
                </h3>
                <p>
                  This rating range signifies average performance. {`There's`}{" "}
                  room for improvement.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg text-black bg-green-100 flex items-center">
              <CheckCircle className="text-green-500 size-24  mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-green-500">
                  High (4.0 - 5.0)
                </h3>
                <p>
                  This rating range reflects excellent performance. Everything
                  is working well.
                </p>
              </div>
            </div>
          </div>
          <Separator orientation="vertical" className=" bg-primary" />
          <div className=" w-[46%] flex flex-col gap-4 items-center my-3   ">
            <Button
              variant="link"
              className="text-3xl flex  duration-500 hover:translate-x-3 transition gap-2 items-center  font-bold "
            >
              Your Feedback Forms
              <CircleArrowOutUpRight />{" "}
            </Button>
            <Separator className=" bg-primary" />
            <FeedBackCreationList />
          </div>
          <Separator orientation="vertical" className=" bg-primary" />
          <div className="flex w-full max-w-[600px] flex-col gap-4 items-center my-3  ">
            <Button
              variant="link"
              className="text-3xl flex gap-2 duration-500 hover:translate-x-3 transition items-center font-bold "
            >
              Recived Feedbacks <CircleArrowOutUpRight />
            </Button>
            <Separator className=" bg-primary" />
            <FeedbackList />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default page;
