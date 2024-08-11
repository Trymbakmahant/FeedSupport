"use client";
import React from "react";
import { LucideX } from "lucide-react"; // assuming Lucide icons are being used
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
interface LinkCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  formId: string;
}

const LinkCardModal: React.FC<LinkCardModalProps> = ({
  isOpen,
  onClose,
  formId,
}) => {
  const formLink = `${window.location.origin}/feedback/${formId}`;
  const router = useRouter();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-black rounded-lg  w-[400px] h-[300px] shadow-lg p-6 ">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-green-600 dark:text-green-400">
            Form Created
          </h2>
          <button onClick={onClose}>
            <LucideX className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        <p className="mt-4 text-gray-800 dark:text-gray-200">
          Your form has been successfully created!
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Share the link below:
        </p>
        <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm text-green-800 dark:text-green-400">
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all"
          >
            {formLink}
          </a>
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => navigator.clipboard.writeText(formLink)}
            className="mt-4 bg-green-600 dark:bg-green-400 text-white rounded px-4 py-2 text-sm hover:bg-green-700 dark:hover:bg-green-500"
          >
            Copy Link
          </Button>
          <Button
            variant="secondary"
            onClick={onClose}
            className="mt-4  text-white rounded px-4 py-2 text-sm "
          >
            Create Second form
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LinkCardModal;
