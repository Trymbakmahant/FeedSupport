// hooks/useFetchForms.ts
import { useState, useEffect } from "react";

interface Form {
  _id: string;
  BussinessName: string;
  BussinessAddress: string;
  Questions: string[];
  Rating: string;
  ProductName: string;
  Description: string;
}

interface FetchFormsResponse {
  success: boolean;
  data?: Form[];
  message?: string;
  error?: string;
}

const useFetchForms = (searchString?: string) => {
  const [forms, setForms] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForms = async () => {
      setLoading(true);
      setError(null);

      try {
        const queryParam = searchString
          ? `?name=${encodeURIComponent(searchString)}`
          : "";
        const response = await fetch(`/api/formcreation${queryParam}`);

        if (!response.ok) {
          const { error, message } = await response.json();
          setError(message || error);
          setForms(null);
          return;
        }

        const { data }: any = await response.json();
        setForms(data || []);
      } catch (error: any) {
        setError(error.message);
        setForms(null);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, [searchString]);

  return { forms, loading, error };
};

export const useFetchFormById = (id: string) => {
  const [form, setForm] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForm = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/form/${id}`);

        if (!response.ok) {
          const { error, message } = await response.json();
          setError(message || error);
          setForm(null);
          return;
        }

        const { data } = await response.json();
        setForm(data || null);
      } catch (error: any) {
        setError(error.message);
        setForm(null);
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [id]);

  return { form, loading, error };
};

export default useFetchForms;
