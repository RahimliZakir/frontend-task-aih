import Loader from "./Spinner";

type DataLoadWrapperProps = {
  isLoading: boolean;
  error: any;
  data: any;
  children: JSX.Element;
};

const DataLoadWrapper = ({
  isLoading,
  error,
  data,
  children,
}: DataLoadWrapperProps) => {
  if (isLoading) return <Loader />;

  if (error) return <div>Error!</div>;

  return data && data.length > 0 ? children : <div>There is no data</div>;
};

export default DataLoadWrapper;
