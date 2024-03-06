import { DataLoadWrapperProps } from "../../types/DataLoad.types";
import Spinner from "./Spinner";

const DataLoadWrapper = ({
  isLoading,
  error,
  data,
  children,
}: DataLoadWrapperProps) => {
  if (isLoading) return <Spinner />;

  if (error) return <div>Error!</div>;

  if (
    data === null ||
    (Array.isArray(data) && data.length === 0) ||
    (typeof data === "object" && Object.keys(data).length === 0)
  ) {
    return <div>There is no data</div>;
  }

  return data && children;
};

export default DataLoadWrapper;
