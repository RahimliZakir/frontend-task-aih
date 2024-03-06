import { useState } from "react";
import { Product } from "../types/Product.types";

const usePagination = (data: Product[] /*| any[]*/, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(data.length / itemsPerPage))
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentItems,
    nextPage,
    prevPage,
    goToPage,
    currentPage,
    totalPages: Math.ceil(data.length / itemsPerPage),
  };
};

export default usePagination;
