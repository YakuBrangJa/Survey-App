import React, { useCallback, useState, useEffect } from "react";

function useHttps() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      setIsLoading(false);
      const data = await response.json();
      applyData(data);
    } catch {
      setError(true);
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHttps;
