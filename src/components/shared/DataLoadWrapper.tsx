import Loader from "./Spinner";

type DataLoadWrapperProps = {
  isLoading: boolean;
  error: any;
  children: JSX.Element;
};

const DataLoadWrapper = ({
  isLoading,
  error,
  children,
}: DataLoadWrapperProps) => {
  if (isLoading) return <Loader />;

  if (error) return <div>Error!</div>;

  return children;
};

export default DataLoadWrapper;
