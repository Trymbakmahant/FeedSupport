"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBusinessInfoStore } from "@/hooks/Zustand";

interface VerificationProviderProps {
  children: React.ReactNode;
}

const VerificationProvider: React.FC<VerificationProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const { bussinessInfo } = useBusinessInfoStore();

  useEffect(() => {
    if (!bussinessInfo.id) {
      router.push("/auth/login"); // Redirect to login page if business info is not set
    }
  }, [bussinessInfo, router]);

  // If business info is empty, you can return null or a loading indicator until the redirect happens
  if (!bussinessInfo.id) {
    return null;
  }

  return <>{children}</>;
};

export default VerificationProvider;
