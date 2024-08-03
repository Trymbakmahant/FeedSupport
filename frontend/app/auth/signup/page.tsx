"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import SignupImage from "@/public/Singpsecond.svg";
import React from "react";
import WorldIDWidget from "@/components/Worldcoin/WorldIDWidget";

const formSchema = z.object({
  BussinessName: z.string().min(2, {
    message: "BussinessName must be at least 2 characters.",
  }),
  description: z.string().min(100, {
    message: "Description must be at least 100 characters.",
  }),
});
const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      BussinessName: "",
      description: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.

    console.log(values);
  }
  return (
    <div className="flex justify-between h-screen overflow-hidden ">
      <div className="flex-1 h-screen flex items-center justify-center">
        <Image src={SignupImage} alt="please signup " priority />
      </div>
      <div className=" bg-primary justify-center flex items-center flex-1">
        <div className=" gap-4 p-14 w-[80%]  bg-white rounded-3xl  ">
          <h1 className="text-end text-primary underline  underline-offset-2 laptop:text-5xl top-10">
            FeedSupport
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4  "
            >
              <FormField
                control={form.control}
                name="BussinessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>BussinessName</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      write about your product or what you do.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-3">
                <Button>Connect wallet</Button>
                <WorldIDWidget />
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Page;
