"use client";
import { APIRequestsProps, BooksApiResponse } from "@/types";
// import { api_base_url } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";

const base_url = "http://localhost:8000/api/v1";

const useAPIRequests = ({ query, route }: APIRequestsProps) => {
  const [data, setData] = useState<BooksApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  async function fetchBooks() {
    console.log("Query:", query);
    if (query.trim().length === 0) {
      setError(true);
      setErrorMessage("Enter your search query");
      return;
    }
    let url = `${base_url}/${route}/`;
    setLoading(true);

    try {
      const response = await axios({
        method: "get",
        url,
        withCredentials: false,
        params: {
          q: 1984,
        },
      });

      setData(response.data);
      setSuccess(true);
      setSuccessMessage("Books fetched");
    } catch (error) {
      setError(true);
      console.log(error);
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(`Unknown Error:${error}`);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setError(false);
    setSuccess(false);
    setErrorMessage("");
    setSuccessMessage("");
    fetchBooks();
  }, [query]);

  return {
    data,
    loading,
    error,
    success,
    errorMessage,
    successMessage,
  };
};

export default useAPIRequests;
