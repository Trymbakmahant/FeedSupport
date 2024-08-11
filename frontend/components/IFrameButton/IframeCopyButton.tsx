import { showToast } from "@/helper/toasthelper";
import React, { useRef } from "react";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const copyToClipboard = () => {
    if (textRef.current) {
      textRef.current.select();
      document.execCommand("copy");
      showToast("success", <p>Iframe copied to clipboard!</p>);
    }
  };

  return (
    <div className="relative">
      {/* Hidden textarea to hold the text */}
      <textarea
        ref={textRef}
        value={textToCopy}
        readOnly
        className="absolute w-0 h-0 -z-30 opacity-0"
      />
      <button
        onClick={copyToClipboard}
        className="bg-blue-500 w-fit text-white px-4 py-2 rounded hover:bg-blue-200"
      >
        Embed
      </button>
    </div>
  );
};

export default CopyButton;
