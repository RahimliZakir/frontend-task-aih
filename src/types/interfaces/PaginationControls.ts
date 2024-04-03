import { Product } from "./Product.types";

export interface PaginationControlsProps {
  data: Product[] | any[];
  nextPage: () => void;
  prevPage: () => void;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
}
