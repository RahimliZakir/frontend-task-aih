//* Hooks
import { useState } from "react";
import usePagination from "../../hooks/usePagination";
import { useGetProducts } from "../../api/products";
import { useGetCategories } from "../../api/categories";
//* Utils
import { configureCurrency } from "../../utils/amount";
//* Types
import { Product } from "../../types/interfaces/Product.types";
//* Shared Components
import DataLoadWrapper from "../shared/DataLoadWrapper";
import StarRating from "../shared/StarRating/Index";
import PaginationControls from "../shared/PaginationControls";
//* Third Party Packages
import Select from "react-select";
import { Link } from "react-router-dom";

const Products = () => {
  const [productName, setProductName] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const {
    data: productData,
    isLoading: productLoading,
    error: productError,
  } = useGetProducts();
  const { data: categoryData } = useGetCategories();

  const filteredItems = productData?.filter((product: Product) => {
    const matchesCategory = category === "" || product.category === category;
    const matchesProductName =
      productName === "" ||
      product.title.toLowerCase().includes(productName.toLowerCase());
    return matchesCategory && matchesProductName;
  });

  console.log(filteredItems, "filtered");

  const pageSize = 10;
  const { paginatedItems, nextPage, prevPage, pageIndex, totalPages } =
    usePagination(filteredItems || [], pageSize);

  console.log(paginatedItems, "paginated");

  return (
    <DataLoadWrapper
      isLoading={productLoading}
      error={productError}
      data={productData}
    >
      <section id="products">
        <div className="custom-container py-3">
          <div className="flex flex-col items-center md:flex-row md:justify-between mb-3">
            <div className="w-[80%] mb-3 md:w-[20%] md:mb-0">
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="search product..."
                type="text"
                className="inline-block w-full border rounded-md px-4 py-1 outline-none"
              />
            </div>
            <div className="w-[80%] md:w-[20%]">
              <Select
                options={[
                  { value: "", label: "---select---" },
                  ...(categoryData?.map((item: string) => ({
                    value: item,
                    label: item,
                  })) || []),
                ]}
                onChange={(opt) => setCategory(opt.value)}
              />
            </div>
          </div>
          {paginatedItems?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
              {paginatedItems?.map(
                ({
                  id,
                  title,
                  price,
                  category,
                  image,
                  rating: { rate, count },
                }: Product) => {
                  return (
                    <div
                      key={id}
                      className="border rounded-[5px] overflow-hidden hover:shadow-lg duration-300"
                    >
                      <Link to={`/products/${id}`}>
                        <div className="bg-white">
                          <img
                            className="w-full h-[300px] object-contain"
                            src={image}
                            alt="Product"
                          />
                        </div>
                        <div className="p-3 border-t-[1px]">
                          <h4
                            title={title}
                            className="truncate text-primary font-semibold mb-1"
                          >
                            {title}
                          </h4>
                          <span className="badge mb-1">{category}</span>
                          <div className="flex items-center">
                            <p>{rate}</p>
                            <div className="mx-1">
                              <StarRating rating={rate} />
                            </div>
                            <p className="text-[color:gray] text-[0.8rem]">
                              ({count})
                            </p>
                          </div>
                          <p className="font-semibold text-[1.2rem] text-[color:var(--main-color)]">
                            {configureCurrency(price)}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                }
              )}
            </div>
          ) : (
            <div className="text-center font-medium text-[1.5rem] py-3">
              Product Not Found!
            </div>
          )}

          <PaginationControls
            data={paginatedItems}
            nextPage={nextPage}
            prevPage={prevPage}
            pageIndex={pageIndex}
            pageSize={pageSize}
            totalPages={totalPages}
          />
        </div>
      </section>
    </DataLoadWrapper>
  );
};

export default Products;
