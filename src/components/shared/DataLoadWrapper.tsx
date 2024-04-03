import { DataLoadWrapperProps } from "../../types/interfaces/DataLoad.types";
import Spinner from "./Spinner/Index";

const DataLoadWrapper = ({
  isLoading,
  error,
  data,
  children,
}: DataLoadWrapperProps) => {
  if (isLoading) return <Spinner />;

  if (error)
    return (
      <div className="text-center text-[color:var(--error-text)] font-medium text-[1.5rem] py-3">
        An Error Occured While Fetch!
      </div>
    );

  if (
    (Array.isArray(data) && data.length === 0) ||
    (typeof data === "object" && Object.keys(data).length === 0)
  ) {
    return (
      <div className="text-center font-medium text-[1.5rem] py-3">
        Product Not Found!
      </div>
    );
  }

  return children;
};

export default DataLoadWrapper;
