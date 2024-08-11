"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaImage, FaVideo } from "react-icons/fa";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import { FaArrowLeft } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import ProfileUpload from "@/components/ui/profileupload";
import ThemeToggelButton from "@/components/ThemeToggle";
import { useParams } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useFetchForm } from "@/hooks/useFormByID";
import HamsterWheel from "@/components/Loading/loader";
import { useAccount } from "wagmi";
import { showToast } from "@/helper/toasthelper";
import { useEAS } from "@/hooks/useEAS";
import WorldIDWidget from "@/components/Worldcoin/WorldIDWidget";
import LoadingDots from "@/components/ui/loadingDots";

const Page = () => {
  const { attest } = useEAS();
  const [answers, setAnswers] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [submitterAddress, setSubmitterAddress] = useState<string>("");
  const [ratingValue, setRatingValue] = useState<number>(5);
  const [pfp, setPfp] = useState<string>("");
  const [WorldcoinVerification, setWorldcoinVerification] =
    useState<boolean>(false);
  const { address, isConnected } = useAccount();
  const [laodingAttest, setLoadingAttes] = useState(false);
  const [laoding, setLoading] = useState(false);
  const handleUpload = (file: string) => {
    console.log("Uploaded file:", file);
    setPfp(file);
  };
  const params = useParams();
  const id = params?.id;
  const formId = Array.isArray(id) ? id[0] : id;
  const { form, loading, error } = useFetchForm(formId);

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (address) setSubmitterAddress(address);
  }, [address]);

  const handleSubmit = async () => {
    if (!validateForm()) {
      console.log("hello");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/formsubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          BussinessName: form.BussinessName,
          BussinessAddress: form.BussinessAddress,
          Questions: form.Questions,
          ANS: answers,
          videoUrl: "", // If you have video, set the video URL here
          imageUrl: "", // If you have an image, set the image URL here
          pfp, // Profile picture URL
          submitterAddress,
          EASaddress: form.EASaddress,
          RatingValue: ratingValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      setLoading(false);
      const result = await response.json();
      console.log("Form submitted successfully", result);
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
    }
  };
  const validateForm = () => {
    const errors: string[] = [];

    if (!name.trim()) {
      showToast("error", <p>Name is required </p>);
      errors.push("Name is required");
      return;
    }

    if (!submitterAddress.trim()) {
      showToast("error", <p>Web3 Account Address is required </p>);
      errors.push("Web3 Account Address is required");
      return;
    }

    if (!/^0x[a-fA-F0-9]{40}$/.test(submitterAddress)) {
      showToast("error", <p>Invalid Web3 Account Address format </p>);
      errors.push("Invalid Web3 Account Address format");
      return;
    }

    if (!ratingValue || isNaN(ratingValue)) {
      showToast("error", <p>Rating is required </p>);
      errors.push("Rating is required");
      return;
    }
    if (pfp.length == 0) {
      showToast("error", <p>pfp is required </p>);
      errors.push("Rating is required");
      return;
    }

    if (answers.some((answer) => !answer.trim())) {
      showToast("error", <p>All questions must be answered </p>);
      errors.push("All questions must be answered");
    }

    if (errors.length > 0) {
      errors.forEach((error) => console.error(error));
      return false;
    }

    return true;
  };
  const handleAttest = async () => {
    if (!validateForm()) {
      console.log("hello");
      return;
    }
    setLoadingAttes(true);
    try {
      const receipt = await attest({
        BussinessName: form.BussinessName,
        BussinessAddress: form.BussinessAddress,
        Questions: form.Questions,
        Answer: answers,
        submitterAddress: address,
        RatingValue: ratingValue,
        ProductName: form.ProductName,
        recipient: "0x0000000000000000000000000000000000000000",
        expirationTime: 0,
        revocable: true,
      });
      setLoadingAttes(false);
      console.log("Attestation successful:", receipt);
    } catch (error) {
      console.error("Attestation failed:", error);
      setLoadingAttes(false);
    }
  };

  if (loading)
    return (
      <div className="bg-black h-screen w-screen flex justify-center items-center">
        <HamsterWheel />
      </div>
    );
  if (error)
    return (
      <div className="bg-black gap-3 flex-col h-screen w-screen flex justify-center items-center">
        <Image
          src={"/wrong.webp"}
          height={400}
          width={600}
          alt="Your Feedback form is worng"
        />
        <span className="text-3xl text-red-500">
          Your feedback id is not available
        </span>
      </div>
    );

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
              <span className="text-2xl">{form.ProductName} </span>
              <span className="text-lg text-gray-400">{form.Description}</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col w-[120px] gap-1">
                <ProfileUpload onUpload={handleUpload} />
                <span className="text-sm"> profile image</span>
              </div>
              <div className="w-full flex-col flex gap-3">
                <div>
                  <Label>Enter Your Name </Label>
                  <Input
                    onChange={handleNameChange}
                    placeholder="example: rahul"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <Label>Connect wallet for Web3Bio </Label>
                  <ConnectButton />
                </div>
              </div>
            </div>{" "}
            <Separator className="bg-gray-300" />
            <div className="flex flex-col gap-3 items-center justify-center">
              <span className="text-2xl">Please Rate Us</span>
              <Rating
                size={40}
                ratingflag={form.Rating}
                onRatingChange={(rating) => {
                  setRatingValue(rating);
                }}
                initialRating={ratingValue}
                key={5}
              />
            </div>
            <Separator className="bg-gray-300" />
            {form.Questions.map((item: any, index: number) => {
              return (
                <div key={index} className="flex  flex-col gap-2">
                  <span>
                    Question No. {index + 1} : {item} ?
                  </span>
                  <Textarea
                    onChange={(e) => {
                      handleAnswerChange(index, e.target.value);
                    }}
                    placeholder="Type your message here."
                  />
                </div>
              );
            })}
            <WorldIDWidget
              action={form.ProductName}
              setWorldcoinVerified={setWorldcoinVerification}
              active={true}
            />
            {!WorldcoinVerification && (
              <span className="text-gray-400">
                ⚠️ for activating the submit and Attestation button verify
                through worldocin
              </span>
            )}
            <Button
              onClick={handleSubmit}
              disabled={!WorldcoinVerification}
              variant="default"
            >
              {loading ? <LoadingDots size={7} /> : "Submit"}
            </Button>{" "}
            <Button
              onClick={handleAttest}
              disabled={!WorldcoinVerification}
              variant="default"
            >
              {laodingAttest ? <LoadingDots size={7} /> : "Sign attestation"}
            </Button>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Page;

// we can use verification of user using the api where we can show the user address
