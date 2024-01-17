import React from "react";
import { useGetCat } from "../hooks/useGetCat";

export const Cat = () => {
  const { data, isLoading, refetchData } = useGetCat();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <button onClick={refetchData}>Refetch Data</button>

      <h1>{data?.fact}</h1>
    </div>
  );
};