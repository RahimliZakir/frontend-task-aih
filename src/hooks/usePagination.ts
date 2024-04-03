import { useState } from "react";
import { Product } from "../types/interfaces/Product.types";

const usePagination = (data: Product[] | any[], pageSize: number) => {
  const [pageIndex, setPageIndex] = useState(1);

  const indexOfLastItem = pageIndex * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const paginatedItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setPageIndex((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(data.length / pageSize))
    );
  };

  const prevPage = () => {
    setPageIndex((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (page: number) => {
    setPageIndex(page);
  };

  return {
    paginatedItems,
    nextPage,
    prevPage,
    goToPage,
    pageIndex,
    totalPages: Math.ceil(data.length / pageSize),
  };
};

export default usePagination;
