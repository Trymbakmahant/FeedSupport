"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaImage, FaVideo } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import { FaArrowLeft } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import ProfileUpload from "@/components/ui/profileupload";
import ThemeToggelButton from "@/components/ThemeToggle";
import { useParams } from "next/navigation";
import { useFetchForm } from "@/hooks/useFormByID";

const Page = () => {
  const handleUpload = (file: string) => {
    console.log("Uploaded file:", file);
  };
  const params = useParams();
  const id = params?.id;
  const formId = Array.isArray(id) ? id[0] : id;
  const { form, loading, error } = useFetchForm(formId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="">
      <div className="w-full px-4 py-5 mb-4 bg-secondary flex justify-between">
        <div className="flex gap-2 items-center">
          <span
            className={`
         text-xl w-14 h-8
        rounded-full flex items-center duration-300 justify-center bg-green-300`}
          >
            FBS
          </span>
          <span className="text-2xl font-semibold">FeedSupport</span>
        </div>
        <ThemeToggelButton />
      </div>
      <div className="w-full h-full flex items-center justify-center ">
        <ScrollArea className="h-[90%] rounded-2xl w-[700px]">
          <div className="px-11 py-14 gap-5  flex-col flex rounded-2xl bg-secondary">
            <div className="flex  h-fit py-4 px-2 rounded-xl  justify-start flex-col gap-2">
              <span className="text-2xl">Give Feedback on </span>
              <span className="text-lg text-gray-400">dsessscriptiopn</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col w-[120px] gap-1">
                <ProfileUpload onUpload={handleUpload} />
                <span className="text-sm"> profile image</span>
              </div>
              <div className="w-full flex-col flex gap-3">
                <div>
                  <Label>Enter Your Name </Label>
                  <Input placeholder="example: rahul" className="rounded-lg" />
                </div>
                <div>
                  <Label>Enter Your Web3 Account address </Label>
                  <Input
                    placeholder="example: 0x3FaBd38d0Bd646e8f8A9c431c623B7D22b7f65E9"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>{" "}
            <Separator className="bg-gray-300" />
            <div className="flex flex-col gap-3 items-center justify-center">
              <span className="text-2xl">Please Rate Us</span>
              <Rating size={40} ratingflag={true} initialRating={5} key={5} />
            </div>
            <Separator className="bg-gray-300" />
            {/* {getValues("questions").map((item, index) => {
            return (
              <div key={index} className="flex  flex-col gap-2">
                <span>
                  Question No. {index + 1} : {item} ?
                </span>
                <Textarea placeholder="Type your message here." />
              </div>
            );
          })} */}
            {/* {getValues("tags").length > 0 && (
            <div className="flex gap-11">
              <div className="w-[400px] gap-3 flex items-center justify-center  h-[300px] bg-black rounded-2xl">
                {getValues("tags").map((item, index) => {
                  if (item == "video") {
                    return (
                      <FaVideo key={index} size={40} className="text-white" />
                    );
                  }
                  if (item == "image") {
                    return (
                      <FaImage className="text-white" key={index} size={40} />
                    );
                  }
                })}
              </div>
              <div className="flex text-2xl  py-4 gap-4 h-full flex-col">
                <span>Upload</span>
                <span>Your</span>
                <span>File</span>
                <span> Here</span>
                <div className="animate-move-right">
                  <FaArrowLeft />
                </div>
              </div>
            </div>
          )} */}
            <Button variant="default">Submit</Button>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Page;

// we can use verification of user using the api where we can show the user address
