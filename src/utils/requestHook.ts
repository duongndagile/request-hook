import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com";

// const privateRequest = (request: any ,url: string, params: any) => {
//   fetch(url, {
//     method: request,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(params),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// };

export const useRequest = (url: string, manual?: boolean) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    !manual &&
      (async () => {
        try {
          const response = await fetch(`${URL}${url}`);
          const res = await response.json();
          setData(res);
        } catch (error: any) {
          setError(error);
        }
      })();
  }, [url]);

  const run = async () => {
    try {
      const response = await fetch(`${URL}${url}`);
      const res = await response.json();
      setData(res);
    } catch (error: any) {
      setError(error);
    }
  };

  // const refresh = () => {};
  return {
    data,
    error,
    run,
    // refresh,
  };
};
