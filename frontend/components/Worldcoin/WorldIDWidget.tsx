"use client"; // for Next.js app router
import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";

import React from "react";
import { Button } from "../ui/button";
import { useWorldcoinVerification } from "@/hooks/useWorldcoinVerification";

const WorldIDWidget = ({
  active,
  signal,
  action,
}: {
  active: boolean;
  signal: string;
  action: string;
}) => {
  const { verify } = useWorldcoinVerification();
  const handleVerify = async (proof: ISuccessResult) => {
    verify(proof, "logins", "mysignal");
  };
  const onSuccess = () => {};
  const stingvar = "sdjofsjd";
  return (
    <div className="">
      <IDKitWidget
        app_id={`app_${process.env.NEXT_PUBLIC_WORLD_ID_API}`} // obtained from the Developer Portal
        action="logins" // obtained from the Developer Portal
        onSuccess={onSuccess} // callback when the modal is closed
        handleVerify={handleVerify} // callback when the proof is received
        verification_level={VerificationLevel.Orb}
      >
        {({ open }) => (
          // This is the button that will open the IDKit modal
          <Button disabled={active} variant="outline" onClick={open}>
            Verify with World ID
          </Button>
        )}
      </IDKitWidget>
    </div>
  );
};

export default WorldIDWidget;
