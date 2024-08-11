import { useEffect, useState } from "react";

interface FormData {
  _id: string;
  BussinessName: string;
  BussinessAddress: string;
  Questions: string[];
  media: string;
  Rating: boolean;
  RatingValue: number;
  // Add other properties based on your model
}

interface FetchFormResponse {
  success: boolean;
  data?: FormData;
  message?: string;
  error?: string;
}

export const useFetchForm = (id: string) => {
  const [form, setForm] = useState<FormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForm = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/formcreation/${id}`);
        const result: FetchFormResponse = await response.json();

        if (result.success) {
          setForm(result.data || null);
        } else {
          setError(result.message || "Failed to fetch form");
        }
      } catch (err) {
        setError("An error occurred while fetching the form");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchForm();
    }
  }, [id]);

  return { form, loading, error };
};
