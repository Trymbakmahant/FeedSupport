"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SignupImage from "@/public/Singpsecond.svg";

import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
interface ITestimonialsCarousal {
  feedback: string;
  pfpimage: string;

  video: string;
  image: string;

  givername: string;
  giverAddress: string;
  bussinessAddress: string;
}
const CardFlip = ({
  feedback = "hey this is my feedback",
  pfpimage = "https://wallpapers-clan.com/wp-content/uploads/2022/02/naruto-pfp-19.jpg",
  video,
  image,
  giverAddress = "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
  givername = "Rahul",
  bussinessAddress = "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
}: ITestimonialsCarousal) => {
  const [detailFlag, setDetailFlag] = useState<boolean>(false); // we use this to show full detail of card
  return (
    <div className="relative w-[300px]  overflow-hidden">
      <div
        className={`  px-3 py-4 border-gray-400 dark:border-white border-[1px]  rounded-xl flex flex-col gap-3 left-0 w-full h-full `}
      >
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col h-11 gap-0">
            <span>{givername}</span>
            <Button
              variant="link"
              className="h-4 w-16"
              onClick={() => {
                window.open(
                  "https://web3.bio/0x861715cd400524d279df4240a99f3c0e22b1c562"
                );
              }}
            >
              check me
            </Button>
          </div>
        </div>
        <AspectRatio ratio={16 / 9} className="bg-primary rounded-lg ">
          <Image
            src={SignupImage}
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <ScrollArea className="h-[140px]">
          <p>{feedback}</p>
        </ScrollArea>
        <Button
          variant="link"
          className="h-4"
          onClick={() => {
            window.open(
              "https://optimism-sepolia.easscan.org/attestation/view/0xc7e5777cfffe5c1dd692d7d2cc160fe67b3ceeb80b2b720dde62ce6e7b0748fa"
            );
          }}
        >
          View Proof
        </Button>
      </div>
    </div>
  );
};

export default CardFlip;
