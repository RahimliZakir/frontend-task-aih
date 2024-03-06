//* Hooks
import { useState } from "react";
import usePagination from "../../hooks/usePagination";
import { useGetProducts } from "../../api/products";
import { useGetCategories } from "../../api/categories";
//* Utils
import { configureCurrency } from "../../utils/currency";
//* Types
import { Product } from "../../types/interfaces/Product.types";
import { CurrencyTypes } from "../../types/enums/CurrecyTypes.types";
//* Shared Components
import DataLoadWrapper from "../shared/DataLoadWrapper";
import StarRating from "../shared/StarRating";
//* Third Party Packages
import Select from "react-select";
import { Link } from "react-router-dom";

const Products = () => {
  const {
    data: productData,
    isLoading: productLoading,
    error: productError,
  } = useGetProducts();
  const { data: categoryData } = useGetCategories();

  const [productName, setProductName] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const filteredProductData = productData?.filter((product: any) => {
    const matchesCategory = category === "" || product.category === category;
    const matchesProductName =
      productName === "" ||
      product.title.toLowerCase().includes(productName.toLowerCase());
    return matchesCategory && matchesProductName;
  });

  const { currentItems, nextPage, prevPage, currentPage, totalPages } =
    usePagination(filteredProductData || [], 10);

  return (
    <DataLoadWrapper
      isLoading={productLoading}
      error={productError}
      data={productData}
    >
      <section id="products">
        <div className="custom-container py-3">
          <div className="flex items-center justify-between mb-3">
            <div>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="search product..."
                type="text"
                className="border rounded-md px-4 py-1 outline-none"
              />
            </div>
            <div className="w-[20%]">
              <Select
                options={[
                  { value: "", label: "---select---" },
                  ,
                  ...(categoryData?.map((item: any) => ({
                    value: item,
                    label: item,
                  })) || []),
                ]}
                onChange={(opt) => setCategory(opt.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {currentItems?.map(
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
                        <h4 className="text-primary font-semibold mb-1 min-h-[75px]">
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
                          {configureCurrency(price, CurrencyTypes.AZN)}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
          <div className="mt-3 flex justify-center items-center">
            <button
              className="button"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span className="mx-2">
              {currentPage} / {totalPages}
            </span>
            <button
              className="button"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </DataLoadWrapper>
  );
};

export default Products;
