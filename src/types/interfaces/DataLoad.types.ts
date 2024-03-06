import { Product } from "./Product.types";

export interface DataLoadWrapperProps {
  isLoading: boolean;
  error: any;
  data: Product[] | any;
  children: JSX.Element;
}
