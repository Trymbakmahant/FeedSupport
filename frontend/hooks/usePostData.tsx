import { useState } from "react";

interface UsePostDataReturn {
  loading: boolean;
  error: string | null;
  success: boolean;
  postData: (url: string, data: any) => Promise<void>;
}

export const usePostData = (): UsePostDataReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const postData = async (url: string, data: any): Promise<void> => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    debugger;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((value) => {
        return value.json();
      });

      console.log(response);
      if (response.status != 200) {
        if (response.status == 409) {
          return response;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
      setSuccess(true);
    } catch (error) {
      console.log("fetcherror");
      console.log(error);
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    postData,
  };
};
