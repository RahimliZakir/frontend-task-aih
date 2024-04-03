import { PaginationControlsProps } from "../../types/interfaces/PaginationControls";

const PaginationControls: React.FC<PaginationControlsProps> = ({
  data,
  nextPage,
  prevPage,
  pageIndex,
  pageSize,
  totalPages,
}) => {
  return (
    <>
      {data?.length === pageSize && (
        <div className="mt-3 flex justify-center items-center">
          <button
            className={`button ${
              pageIndex === 1 ? "cursor-default" : "cursor-pointer"
            }`}
            onClick={prevPage}
            disabled={pageIndex === 1}
          >
            Prev
          </button>
          <span className="mx-2">
            {pageIndex} / {totalPages}
          </span>
          <button
            className={`button ${
              pageIndex === totalPages ? "cursor-default" : "cursor-pointer"
            }`}
            onClick={nextPage}
            disabled={pageIndex === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default PaginationControls;
