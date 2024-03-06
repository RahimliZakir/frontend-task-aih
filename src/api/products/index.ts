import useSWR from "swr";
import { fetcher } from "..";

const endpoint = "/products";

export const useGetProducts = () => {
  return useSWR(endpoint, fetcher);
};

export const useGetProductDetails = (id: string | undefined) => {
  return useSWR(`${endpoint}/${id}`, fetcher);
};
