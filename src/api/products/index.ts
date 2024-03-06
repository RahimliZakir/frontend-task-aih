import useSWR from "swr";
import { fetcher } from "..";

const prefix = "/products";

export const useGetProducts = () => {
  return useSWR(prefix, fetcher);
};

export const useGetProductDetails = (id: string | undefined) => {
  return useSWR(`${prefix}/${id}`, fetcher);
};
