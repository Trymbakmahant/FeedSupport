import { useEthersSigner } from "./useSigner";
import { useState, useEffect } from "react";

import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";

const easContractAddress = "0x4200000000000000000000000000000000000021";
const schemaUID =
  "0xd162044a8c7260bfcdb621e420d69911dbbd378ef394cde6a70c7b3399d9cf9b";

export const useEAS = () => {
  const [walletStatus, setWalletStatus] = useState<
    "disconnected" | "connected" | "loading"
  >("loading");
  const [txStatus, setTxStatus] = useState<
    "idle" | "processing" | "completed" | "failed"
  >("idle");

  const signer = useEthersSigner();
  const [eas, setEAS] = useState<EAS | null>(null);

  useEffect(() => {
    if (signer) {
      const newEAS = new EAS(easContractAddress);
      newEAS.connect(signer);
      setEAS(newEAS);
      setWalletStatus("connected");
    } else {
      setWalletStatus("disconnected");
    }
  }, [signer]);

  const attest = async (data: any) => {
    if (!eas) {
      throw new Error("EAS is not initialized");
    }

    setTxStatus("processing");
    try {
      const schemaEncoder = new SchemaEncoder(
        "string BussinessName,address BussinessAddress,string[] Questions,string[] Answer,address submitterAddress,uint8 RatingValue,string ProductName"
      );

      const encodedData = schemaEncoder.encodeData([
        { name: "BussinessName", value: data.BussinessName, type: "string" },
        {
          name: "BussinessAddress",
          value: data.BussinessAddress,
          type: "address",
        },
        { name: "Questions", value: data.Questions, type: "string[]" },
        { name: "Answer", value: data.Answer, type: "string[]" },
        {
          name: "submitterAddress",
          value: data.submitterAddress,
          type: "address",
        },
        { name: "RatingValue", value: data.RatingValue, type: "uint8" },
        { name: "ProductName", value: data.ProductName, type: "string" },
      ]);

      const tx = await eas.attest({
        schema: schemaUID,
        data: {
          recipient: data.recipient,
          expirationTime: data.expirationTime,
          revocable: data.revocable,
          data: encodedData,
        },
      });

      await tx.wait();
      setTxStatus("completed");
      return "Transaction completed successfully";
    } catch (error) {
      setTxStatus("failed");
      console.error("Attestation failed:", error);
      throw error;
    }
  };

  return {
    walletStatus,
    txStatus,
    attest,
  };
};
