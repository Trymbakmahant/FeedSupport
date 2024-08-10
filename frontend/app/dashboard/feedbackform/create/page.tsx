"use client";
import { ImSad } from "react-icons/im";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  RiEmotionHappyLine,
  RiEmotionLaughFill,
  RiEmotionNormalLine,
} from "react-icons/ri";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { FaSadCry, FaImage, FaVideo } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import { FaArrowLeft } from "react-icons/fa6";
import { title } from "process";
import { Plus, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ProfileUpload from "@/components/ui/profileupload";

const CreationFormSchema = z.object({
  tags: z.array(z.string()),
  // .refine((value) => value.some((item) => item), {
  //   message: "You have to select at least one item.",
  // }),
  title: z.string().min(40, {
    message: "Title must be at least 40 characters long.",
  }),
  rating: z.boolean(),
  questions: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to add at least one question.",
  }),
  name: z
    .string()
    .max(30, {
      message: "Name must be under 30 characters long",
    })
    .min(2, {
      message: "Title must be at least 2 characters long.",
    }),
});

interface IFormInputs {
  tags: string[];
  title: string;
  rating: boolean;
  questions: string[];
  name: string;
}

const CreateFeedback = () => {
  const {
    control,
    handleSubmit,
    getValues,
    getFieldState,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: zodResolver(CreationFormSchema),
    defaultValues: {
      tags: [],
      title: "",
      rating: true,
      questions: ["give Your feedback"],
      name: "",
    },
  });

  const [formData, setFormData] = useState<IFormInputs>({
    tags: [],
    title: "",
    rating: true,
    questions: [],
    name: "",
  });

  const onSubmit = (data: IFormInputs) => {
    setFormData(data);
  };
  const handleUpload = (file: string) => {
    console.log("Uploaded file:", file);
  };

  return (
    <div className="flex items-center justify-center w-full px-10 h-screen gap-6">
      <div className="h-[95vh]">
        <span className="px-2 text-4xl">Tools</span>
        <ScrollArea className="h-[90vh] rounded-2xl w-[500px]">
          <div className="px-3 py-5 flex flex-col gap-5 h-full relative  rounded-2xl bg-secondary">
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <div className="mb-4 flex-col flex gap-2">
                    <Label className="text-xl">Product Name</Label>
                    <Input {...field} placeholder="Enter name" />{" "}
                    <span className="text-red-500 text-sm">
                      {errors.name && <p>{errors.name?.message}</p>}
                    </span>
                  </div>
                )}
              />
              <Separator className="bg-gray-400 my-2" />
              <Controller
                control={control}
                name="title"
                render={({ field }) => (
                  <div className="mb-4 flex-col flex gap-2">
                    <Label className="text-xl">Title</Label>
                    <Input {...field} placeholder="Enter Title" />{" "}
                    <span className="text-red-500 text-sm">
                      {errors.title && <p>{errors.title.message}</p>}
                    </span>
                  </div>
                )}
              />{" "}
              <Separator className="bg-gray-400 my-2" />
              <Controller
                control={control}
                name="tags"
                render={({ field }) => (
                  <div className="mb-4 flex-col flex gap-3">
                    <Label className="text-base">Select Media Type</Label>
                    <div className="flex flex-wrap gap-2">
                      {/* Example tags, replace with your actual tags */}
                      {["video", "image"].map((tag) => (
                        <Button
                          key={tag}
                          variant={
                            field.value.includes(tag) ? "default" : "outline"
                          }
                          onClick={() =>
                            field.onChange(
                              field.value.includes(tag)
                                ? field.value.filter((v) => v !== tag)
                                : [...field.value, tag]
                            )
                          }
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>{" "}
                    <span className="text-red-500 text-sm">
                      {" "}
                      {errors.tags && <p>{errors.tags.message}</p>}
                    </span>
                    <span className="text-gray-400 text-sm">
                      this allows your feedback giver option to upload image
                      video if you want in your testimonials
                    </span>
                  </div>
                )}
              />{" "}
              <Separator className="bg-gray-400 my-2" />
              <Controller
                control={control}
                name="rating"
                render={({ field }) => (
                  <div className="my-4  gap-2 flex-col flex">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />{" "}
                      <Label className="text-base">
                        {field.value
                          ? "Remove Rating  from your Form"
                          : "Add Rating to your Form"}
                      </Label>
                    </div>

                    {errors.rating && <p>{errors.rating.message}</p>}
                    <Rating
                      initialRating={field.value ? 5 : 0}
                      key={field.value ? 5 : 0}
                    />
                  </div>
                )}
              />{" "}
              <Separator className="bg-gray-400 my-2" />
              <Controller
                control={control}
                name="questions"
                render={({ field }) => (
                  <div className="mb-4 flex flex-col gap-4">
                    <div className="flex justify-between items-center gap-2">
                      <Label className="text-lg">Add your Questions</Label>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-lg flex gap-1"
                        type="button"
                        onClick={() => field.onChange([...field.value, ""])}
                      >
                        <Plus /> Add Text Que.
                      </Button>
                    </div>
                    {field.value.map((question: string, index: number) => (
                      <div key={index} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Input
                            type="text"
                            value={question}
                            onChange={(e) => {
                              const updatedQuestions = [...field.value];
                              updatedQuestions[index] = e.target.value;
                              field.onChange(updatedQuestions);
                            }}
                          />
                          <Button
                            variant="outline"
                            className="rounded-lg text-sm flex gap-1"
                            type="button"
                            onClick={() => {
                              const updatedQuestions = field.value.filter(
                                (_: string, i: number) => i !== index
                              );
                              field.onChange(updatedQuestions);
                            }}
                          >
                            <X size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}{" "}
                    <span className="text-red-500 text-sm">
                      {errors.questions && <p>{errors.questions.message}</p>}
                    </span>
                  </div>
                )}
              />
              <Button type="submit">Create Preview</Button>
            </form>
          </div>
        </ScrollArea>
      </div>
      <div>
        <span className="px-2 text-4xl">Feedback Form Preview</span>
        <ScrollArea className="h-[90vh] rounded-2xl w-[700px]">
          <div className="px-11 py-14 gap-5  flex-col flex rounded-2xl bg-secondary">
            <div className="flex flex-col gap-2">
              <span className="text-2xl">
                Give Feedback on{" "}
                {getValues("name") == "" ? "Product Name" : getValues("name")}
              </span>
              <span className="text-lg text-gray-400">
                {getValues("title") == ""
                  ? "Product title"
                  : getValues("title")}
              </span>
            </div>
            <Separator className="bg-gray-300" />
            <div className="flex items-center gap-6">
              <div className="flex flex-col w-[120px] gap-1">
                <ProfileUpload onUpload={handleUpload} />
                <span className="text-sm"> profile image</span>
              </div>
              <div className="w-full flex-col flex gap-3">
                <div>
                  {" "}
                  <Label>Enter Your Name </Label>
                  <Input placeholder="example: rahul" className="rounded-lg" />
                </div>
                <div>
                  {" "}
                  <Label>Enter Your Web3 Account address </Label>
                  <Input
                    placeholder="example: 0x3FaBd38d0Bd646e8f8A9c431c623B7D22b7f65E9
 "
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>{" "}
            <Separator className="bg-gray-300" />
            {getValues("rating") && (
              <div className="flex mb-7 gap-4">
                <div className=" size-24 border-gray-400 rounded-xl border-2 flex items-center justify-center">
                  <FaSadCry size={40} />
                </div>
                <div className=" size-24 border-gray-400 rounded-xl border-2 flex items-center justify-center">
                  <ImSad size={40} />
                </div>
                <div className=" size-24 border-gray-400 rounded-xl border-2 flex items-center justify-center">
                  <RiEmotionNormalLine size={40} />
                </div>
                <div className=" size-24 border-gray-400 rounded-xl border-2 flex items-center justify-center">
                  <RiEmotionHappyLine size={40} />
                </div>
                <div className=" size-24 border-gray-400 rounded-xl border-2 flex items-center justify-center">
                  <RiEmotionLaughFill size={40} />
                </div>
              </div>
            )}{" "}
            <Separator className="bg-gray-300" />
            {getValues("questions").map((item, index) => {
              return (
                <div key={index} className="flex  flex-col gap-2">
                  <span>
                    Question No. {index + 1} : {item} ?
                  </span>
                  <Textarea placeholder="Type your message here." />
                </div>
              );
            })}
            {getValues("tags").length > 0 && (
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
            )}
            <Button variant="default">Submit</Button>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CreateFeedback;
