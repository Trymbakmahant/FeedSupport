"use client";
import { useState } from "react";

interface VerificationData {
  nullifier_hash: string;
  merkle_root: string;
  proof: string;
  verification_level: string;
}

export const useWorldcoinVerification = () => {
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const verify = async (
    proofData: VerificationData,
    action: string,
    signal: string
  ) => {
    debugger;
    setLoading(true);
    setError(null);
    const ourdata = JSON.stringify({
      ...proofData,
      action: action,
      signal_hash: signal,
    });
    const apiUrl = `https://developer.worldcoin.org/api/v2/verify/app_${process.env.NEXT_PUBLIC_WORLD_ID_API}`; // Adjust this URL based on your API endpoint
    console.log("apiURL", apiUrl);
    console.log("proof", ourdata);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...proofData,
          action: action,
          signal_hash: signal,
        }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Verification failed");
      }

      const result = await response.json();
      setVerificationResult(result);
    } catch (err: any) {
      console.log(err);
      setError(err.message || "An error occurred during verification");
    } finally {
      setLoading(false);
    }
  };

  return { verify, verificationResult, error, loading };
};
