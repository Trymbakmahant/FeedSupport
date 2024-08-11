"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { showToast } from "@/helper/toasthelper";
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
import React, { useEffect, useState } from "react";
import WorldIDWidget, {
  WorldIDWidgetForLogin,
} from "@/components/Worldcoin/WorldIDWidget";
import { Textarea } from "@/components/ui/textarea";
import { usePostData } from "@/hooks/usePostData";
import LoadingDots from "@/components/ui/loadingDots";
import { useRouter } from "next/navigation";
import { useBusinessInfoStore } from "@/hooks/Zustand";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Label } from "@radix-ui/react-label";
import { useWorldCoinStore } from "@/hooks/WorldCoinVerify";

const formSchema = z.object({
  email: z.string().email({ message: "invalid email address" }),
  address: z
    .string()
    .min(42, { message: "invalid wallet address" })
    .max(42, { message: "invalid wallet address" }),
  nulliFireHash: z.string(),
});

const Page = () => {
  const { setBusinessInfo, updateBusinessInfo } = useBusinessInfoStore();
  const { isConnected, address } = useAccount();
  const [proof, setProof] = useState<any>();
  const [WorldcoinVerification, setWorldcoinVerification] =
    useState<boolean>(false);
  const router = useRouter();
  const { loading, error, success, postData } = usePostData();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      address: "",
      nulliFireHash: "",
    },
    mode: "onChange",
  });
  useEffect(() => {
    if (WorldcoinVerification) {
      setValue("nulliFireHash", proof.nullifier_hash);
    }
  }, [WorldcoinVerification]);
  useEffect(() => {
    if (address) {
      setValue("address", address);
    }
  }, [address]);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!WorldcoinVerification) {
      return;
    }
    debugger;
    const respons: any = await postData("/api/verifyemail", values);
    console.log(respons);
    if (respons?.status == 200) {
      console.log(respons);
      updateBusinessInfo({
        username: respons.user.username,
        id: respons.user._id,
        description: respons.user.description,
        email: respons.user.email,
        address: respons.user.address,
      });
      showToast("success", <p> Login Completed </p>);
      router.push("/dashboard");
    } else {
      showToast(
        "error",
        <p> Your {`don't `} have any account Please Signup</p>
      );
      router.push("/auth/signup");
    }
  }
  if (success) {
    return (
      <div className="flex justify-center items-center">
        Hey We have send you email verification link please check it
      </div>
    );
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
          <h2 className="w-full text-lg text-primary py-3">
            Please Fill this form to get email verification code
          </h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4  "
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-primary-foreground"
                        placeholder="Enter You mail"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-1">
                <Label className="text-black">
                  Hey Please Connect befor procceing a head{" "}
                </Label>
                <ConnectButton />
              </div>{" "}
              {isConnected && (
                <div className="flex gap-3">
                  <WorldIDWidgetForLogin
                    setProof={setProof}
                    action="logins"
                    setWorldcoinVerified={setWorldcoinVerification}
                    active={!isValid || isSubmitting}
                  />
                  <Button
                    disabled={
                      !isValid || isSubmitting || !WorldcoinVerification
                    }
                    type="submit"
                    // onClick={() => {
                    //   console.log(form);
                    // }}
                    className="w-fit"
                  >
                    {loading ? <LoadingDots size={7} /> : "Login"}
                  </Button>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
      <Button variant="link" className="fixed text-xl text-black top-6 right-4">
        Sign Up
      </Button>
    </div>
  );
};

export default Page;
