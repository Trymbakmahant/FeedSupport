"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";

interface IFeedBackFormData {
  productName: string;
  tags: string[];
  quetions: string[];
  rating: number;
}
const CreateFeedback = () => {
  const [FeedBackFormData, setFeedBackFormData] = useState<IFeedBackFormData>({
    productName: "",
    tags: [],
    quetions: [],
    rating: 0,
  });
  return (
    <div className="flex items-center w-screen px-10 h-screen gap-6">
      <ScrollArea className="h-[90vh]  rounded-2xl w-[500px] ">
        <span className="px-2"> Tools</span>
        <div className=" px-3 py-4 rounded-2xl  bg-secondary">
          <span>Title</span>
        </div>
      </ScrollArea>
      <ScrollArea className="h-[90vh]  rounded-2xl w-full ">
        <span className="px-2"> Feedback form preview</span>
        <div className=" px-3 py-4 rounded-2xl  bg-secondary">
          <span>Title</span>
        </div>
      </ScrollArea>
    </div>
  );
};

export default CreateFeedback;
