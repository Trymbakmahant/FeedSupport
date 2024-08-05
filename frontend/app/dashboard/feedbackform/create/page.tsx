"use client";
import FeedbackForm from "@/components/FeedBackForm/Create/FeedbackForm";
import Quetions from "@/components/FeedBackForm/Create/Quetions";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface IFeedbackQuetions {
  quetionType: "text" | "mcq";
  quetion: string;
  options?: string[];
}

interface IFeedBackFormData {
  productName: string;
  tags: string[];
  quetions: IFeedbackQuetions[];
  rating: number;
  title: string;
}

const submitionType = [
  { id: "image", label: "image" },
  { id: "text", label: "text" },
  { id: "video", label: "video" },
] as const;

const CreationFormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  title: z.string().min(40, {
    message: "Title must be at least 40 characters long.",
  }),
});

const CreateFeedback = () => {
  const form = useForm<z.infer<typeof CreationFormSchema>>({
    resolver: zodResolver(CreationFormSchema),
    defaultValues: {
      items: ["text"],
    },
  });
  const [quetionsList, setQuestionList] = useState<IFeedbackQuetions[]>([
    {
      quetionType: "text",
      quetion: "give us feedback on FeedSupport",
    },
  ]);
  const [FeedBackFormData, setFeedBackFormData] = useState<IFeedBackFormData>({
    productName: "",
    tags: [],
    quetions: [
      {
        quetionType: "text",
        quetion: "give us feedback on FeedSupport",
      },
    ],
    rating: 0,
    title: "",
  });

  const onSubmit = (data: z.infer<typeof CreationFormSchema>) => {
    console.log(FeedBackFormData);
  };

  return (
    <div className="flex items-center justify-center w-full px-10 h-screen gap-6">
      <div className="h-[95vh]">
        <span className="px-2 text-4xl">Tools</span>
        <ScrollArea className="h-[90vh] rounded-2xl w-[500px]">
          <div className="px-3 py-5 flex flex-col gap-5 h-full relative  rounded-2xl bg-secondary">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Form field for title */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Feedback about ...." {...field} />
                      </FormControl>
                      <FormDescription>Enter your Form Title.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Form Field for Media */}
                <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">
                          Select Media Type
                        </FormLabel>
                        <FormDescription>
                          You can select multiple media types; this means users
                          can submit the form by any of them.
                        </FormDescription>
                      </div>
                      {submitionType.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="items"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Quetions
                  quetions={quetionsList}
                  setFeedBackFormData={setQuestionList}
                />
                <Button className="" type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </div>
      <div>
        <span className="px-2 text-4xl">Feedback Form Preview</span>
        <ScrollArea className="h-[90vh] rounded-2xl w-[700px]">
          <div className="px-3 py-5 rounded-2xl bg-secondary">
            <span>Title</span>
            <FeedbackForm />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CreateFeedback;
