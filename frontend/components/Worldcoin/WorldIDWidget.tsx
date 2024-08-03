"use client"; // for Next.js app router
import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";

// ...

import React from "react";
import { Button } from "../ui/button";

const WorldIDWidget = () => {
  const handleVerify = async (proof: ISuccessResult) => {
    const res = await fetch("/api/verify", {
      // route to your backend will depend on implementation
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proof),
    });
    if (!res.ok) {
      throw new Error("Verification failed."); // IDKit will display the error message to the user in the modal
    }
  };
  const onSuccess = () => {
    // This is where you should perform any actions after the modal is closed
    // Such as redirecting the user to a new page
    window.location.href = "/success";
  };
  const stingvar = "sdjofsjd";
  return (
    <div className="">
      <IDKitWidget
        app_id={`app_${stingvar}`} // obtained from the Developer Portal
        action="your action id" // obtained from the Developer Portal
        onSuccess={onSuccess} // callback when the modal is closed
        handleVerify={handleVerify} // callback when the proof is received
        verification_level={VerificationLevel.Orb}
      >
        {({ open }) => (
          // This is the button that will open the IDKit modal
          <Button variant="outline" onClick={open}>
            Verify with World ID
          </Button>
        )}
      </IDKitWidget>
    </div>
  );
};

export default WorldIDWidget;
