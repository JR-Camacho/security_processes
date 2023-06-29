import { useState } from "react";

import axios from "axios";

const useApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (url, method, body = null) => {
    setLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await axios({
        method,
        url,
        data: body,
      });
      setData(response.data);
    } catch (error) {
      setError(error.response.data);
      setIsError(true);
    }

    setLoading(false);
  };

  const get = async (url) => {
    await fetchData(url, "GET");
  };

  const post = async (url, body) => {
    await fetchData(url, "POST", body);
  };

  const put = async (url, body) => {
    await fetchData(url, "PUT", body);
  };

  const remove = async (url) => {
    await fetchData(url, "DELETE");
  };

  return {
    data,
    loading,
    error,
    isError,
    get,
    post,
    put,
    remove,
  };
};

export default useApi;
