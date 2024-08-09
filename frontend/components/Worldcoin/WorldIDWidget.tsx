"use client"; // for Next.js app router
import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";

import React from "react";
import { Button } from "../ui/button";

const WorldIDWidget = () => {
  const handleVerify = async (proof: ISuccessResult) => {
    console.log(proof);
    // const res = await fetch("/api/verify", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(proof),
    // });
    // if (!res.ok) {
    //   throw new Error("Verification failed."); // IDKit will display the error message to the user in the modal
    // }
  };
  const onSuccess = () => {};
  const stingvar = "sdjofsjd";
  return (
    <div className="">
      <IDKitWidget
        app_id={`app_${process.env.NEXT_PUBLIC_WORLD_ID_API}`} // obtained from the Developer Portal
        action={`${process.env.NEXT_PUBLIC_World_ID_ACTION}`} // obtained from the Developer Portal
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
