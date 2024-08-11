import React from "react";
import Testimonials from "@/components/Testimonials/TestimonialsCarousal";

const page = () => {
  return (
    <div className="items-center w-full h-fll justify-center flex flex-col gap-4">
      <h1 className="text-5xl font-semibold">Testimonials</h1>
      <Testimonials />
    </div>
  );
};

export default page;
