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
import React from "react";

const formSchema = z.object({
  UserName: z.string().min(2, {
    message: "UserName must be at least 2 characters.",
  }),
});
interface IFormInputs {
  tags: string[];
  title: string;
  rating: boolean;
  questions: string[];
  name: string;
}
const FeedbackForm = ({
  tags,
  title,
  name,
  rating,
  questions,
}: IFormInputs) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      UserName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.

    console.log(values);
  }
  return (
    <div className="px-11 py-14   rounded-2xl bg-secondary">
      <span className="text-2xl">
        Give Feedback on {name == "" ? "Product Name" : name}
      </span>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4  ">
          <FormField
            control={form.control}
            name="UserName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserName</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-3">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FeedbackForm;
