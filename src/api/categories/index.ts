import useSWR from "swr";
import { fetcher } from "..";

const endpoint = "/products/categories";

export const useGetCategories = () => {
  return useSWR(endpoint, fetcher);
};
