import React from "react";
import CircularProgressBar from "@/components/ui/circularProgressBar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
const page = () => {
  return (
    <div className="w-full h-screen">
      <nav className="p-4 flex item-center justify-between">
        <span className="text-2xl">Support Form</span>
        <Button className="flex gap-1 items-center">
          {" "}
          <Plus /> Create New
        </Button>
      </nav>
      <Separator />
    </div>
  );
};

export default page;
