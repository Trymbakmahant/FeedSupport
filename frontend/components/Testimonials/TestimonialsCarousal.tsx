"use client";
import Image from "next/image";

import React from "react";
import CardFlip from "./TestimonialCard";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface ITestimonialsCarousal {
  feedback: string;
  pfpimage: string;

  video: string;
  image: string;

  givername: string;
  giverAddress: string;
  bussinessAddress: string;
}

export const data: ITestimonialsCarousal[] = [
  {
    feedback: "hey this is my feedback",
    pfpimage:
      "https://wallpapers-clan.com/wp-content/uploads/2022/02/naruto-pfp-19.jpg",
    video: "",
    image: "",
    giverAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
    givername: "Rahul",
    bussinessAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
  },
  {
    feedback: "hey this is my feedback",
    pfpimage:
      "https://wallpapers-clan.com/wp-content/uploads/2022/02/naruto-pfp-19.jpg",
    video: "",
    image: "",
    giverAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
    givername: "Rahul",
    bussinessAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
  },
  {
    feedback: "hey this is my feedback",
    pfpimage:
      "https://wallpapers-clan.com/wp-content/uploads/2022/02/naruto-pfp-19.jpg",
    video: "",
    image: "",
    giverAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
    givername: "Rahul",
    bussinessAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
  },
  {
    feedback: "hey this is my feedback",
    pfpimage:
      "https://wallpapers-clan.com/wp-content/uploads/2022/02/naruto-pfp-19.jpg",
    video: "",
    image: "",
    giverAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
    givername: "Rahul",
    bussinessAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
  },
  {
    feedback:
      "hey 1this is my feedback hey this is 2my feedbackhey this is 3my feedbackhey this is 4my feedbackhey this is 5my feedbackhey this is 6my feedback 1 feedback hey this is 2my feedbackhey this is 3my feedbackhey this is 4my",
    pfpimage:
      "https://wallpapers-clan.com/wp-content/uploads/2022/02/naruto-pfp-19.jpg",
    video: "",
    image: "",
    giverAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
    givername: "Rahul",
    bussinessAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
  },
  {
    feedback: "hey this is my feedback",
    pfpimage:
      "https://wallpapers-clan.com/wp-content/uploads/2022/02/naruto-pfp-19.jpg",
    video: "",
    image: "",
    giverAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
    givername: "Rahul",
    bussinessAddress: "0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97",
  },
];

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-[90vw] max-w-[1200px]"
    >
      <CarouselContent className=" h-[420px]  py-5 ">
        {data.map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2  xl:basis-1/4 lg:basis-1/3"
          >
            <div className="flex h-full w-full justify-center">
              <CardFlip
                feedback={_.feedback}
                pfpimage={_.pfpimage}
                video={_.video}
                image={_.image}
                giverAddress={_.giverAddress}
                givername={_.givername}
                bussinessAddress={_.bussinessAddress}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-full flex items-center justify-center mt-7 gap-4">
        <CarouselPrevious />
        <div>
          {current} / {count}
        </div>
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default Testimonials;
