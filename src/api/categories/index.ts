import useSWR from "swr";
import { fetcher } from "..";

const prefix = "/products/categories";

export const useGetCategories = () => {
  return useSWR(prefix, fetcher);
};
