import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import CircularProgressBar from "./circularProgressBar";
import Image from "next/image";

interface ProfileUploadProps {
  onUpload: (fileUrl: string) => void;
}

const ProfileUpload: React.FC<ProfileUploadProps> = ({ onUpload }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const uploadToCloudinary = async (file: File) => {
    debugger;
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData,
        {
          onUploadProgress: (event) => {
            const percent = Math.round((event.loaded / event.total!) * 100);
            setUploadProgress(percent); // Update progress
          },
        }
      );

      const fileUrl = response.data.secure_url;
      setImageSrc(fileUrl);
      onUpload(fileUrl);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    uploadToCloudinary(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".gif"] },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="w-12 h-12 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center cursor-pointer overflow-hidden relative"
      style={{ width: "70px", height: "70px" }}
    >
      <input {...getInputProps()} />
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-sm text-gray-500">Upload</span>
      )}

      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <CircularProgressBar
            percent={uploadProgress}
            radius={20}
            strokeWidth={4}
            color="#00ff00"
            text={`${uploadProgress}%`}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileUpload;
