"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FormList } from "@/components/FeedBackForm/FormsList";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CarouselDemo } from "@/components/FeedBackForm/FeedbackCarousal";
const Feedbackform = () => {
  const router = useRouter();
  return (
    <div className="w-full  h-screen">
      <nav className="p-4 h-16 flex item-center justify-between">
        <span className="text-2xl">Feedback Form</span>
        <Button
          onClick={() => {
            router.push("/dashboard/feedbackform/create");
          }}
          className="flex gap-1 items-center"
        >
          {" "}
          <Plus /> Create New
        </Button>
      </nav>
      <Separator />
      <ScrollArea className="h-[calc(100vh-70px)] w-full">
        <div className="flex mt-4 gap-2 px-3 flex-col items-center">
          <span className="text-xl"> Your Current Testimonial</span>
          <div className="w-full flex justify-center rounded-2xl h-[400px] bg-secondary">
            <CarouselDemo />
          </div>
        </div>
        <Separator className="mt-4" />
        <FormList />
      </ScrollArea>
    </div>
  );
};

export default Feedbackform;
