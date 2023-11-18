import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [state, setState] = useState({
    data: {} as InnerData[],
    isLoading: true,
    hasErrors: false,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasErrors: false,
    });
    console.log(data);
  };
  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasErrors,
  };
}

export type InnerData = {
  quote: string;
  author: string;
};
