"use client";
import React from "react";
import {
  HandCoins,
  BriefcaseBusiness,
  NotebookPen,
  ChevronRight,
} from "lucide-react";
import CircularProgressBar from "../ui/circularProgressBar";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useCount, useBusinessInfoStore } from "@/hooks/Zustand";
const Overview = () => {
  const router = useRouter();
  const { bussinessInfo } = useBusinessInfoStore();
  return (
    <div className="w-full flex flex-col gap-5 h-full">
      <span className="text-4xl px-11">Overview</span>
      <div className="w-full flex justify-around">
        <div className="w-[30%] flex gap-3  p-5 h-[180px] rounded-2xl bg-secondary ">
          <div className="flex gap-3 flex-col">
            <span className="flex  gap-2 text-xl">
              <NotebookPen /> Feedback Form
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-primary px-7">
                {bussinessInfo.username} Total count{" "}
              </span>
              <span className="text-primary px-7">150 Total user respons </span>
            </div>
            <Button
              className="w-fit  px-7 mt-3 animate-slow-pulse  text-base "
              variant="ghost"
              onClick={() => {
                router.push("/dashboard/feedbackform/create");
              }}
            >
              create new <ChevronRight />
            </Button>
          </div>
          <div className="flex items-center">
            <CircularProgressBar
              percent={90}
              radius={50}
              strokeWidth={15}
              color="#16a34a"
              text="4.5"
            />
          </div>{" "}
        </div>
        <div className="w-[30%] flex gap-3  p-5 h-[180px] rounded-2xl bg-secondary ">
          <div className="flex gap-3 flex-col">
            <span className="flex gap-2 text-xl">
              <HandCoins /> Suport Form
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-primary px-7"> 30 Total count </span>
              <span className="text-primary px-7">150 uniqe donation </span>
            </div>
            <Button
              className="w-fit px-7 mt-3  animate-slow-pulse  text-base "
              variant="ghost"
              onClick={() => {
                router.push("/dashboard/feedbackform/create");
              }}
            >
              create new <ChevronRight />
            </Button>
          </div>
          <div className="flex items-center">
            <CircularProgressBar
              percent={90}
              radius={50}
              strokeWidth={15}
              color="#16a34a"
              text="4.5"
            />
          </div>
        </div>

        <div className="w-[30%] p-5 h-[180px] rounded-2xl bg-secondary ">
          <span className="flex gap-2 text-xl">
            <BriefcaseBusiness /> Your plan
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
