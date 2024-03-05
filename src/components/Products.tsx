import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../api";

import DataLoadWrapper from "./shared/DataLoadWrapper";
import StarRating from "./shared/StarRating";
import Select from "react-select";
import { Link } from "react-router-dom";

const Products = () => {
  const {
    data: productData,
    isLoading: productLoading,
    error: productError,
  } = useSWR("/products", fetcher);
  const { data: categoryData } = useSWR("/products/categories", fetcher);

  const [productName, setProductName] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const filteredProductData = productData?.filter((product: any) => {
    const matchesCategory = category === "" || product.category === category;
    const matchesProductName =
      productName === "" ||
      product.title.toLowerCase().includes(productName.toLowerCase());
    return matchesCategory && matchesProductName;
  });

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
            {filteredProductData?.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="border rounded-[5px] overflow-hidden hover:shadow-md duration-300"
                >
                  <Link to={`/products/${item.id}`}>
                    <div className="bg-white">
                      <img
                        className="w-full h-[300px] object-contain"
                        src={item.image}
                        alt="Product"
                      />
                    </div>
                    <div className="p-3 border-t-[1px]">
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <span className="badge mb-1">{item.category}</span>
                      <div className="flex items-center">
                        <p>{item.rating.rate}</p>
                        <div className="mx-1">
                          <StarRating rating={item.rating.rate} />
                        </div>
                        <p className="text-[color:gray] text-[0.8rem]">
                          ({item.rating.count})
                        </p>
                      </div>
                      <p className="font-semibold text-[1.2rem] text-[color:var(--main-color)]">
                        {item.price} ₼
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </DataLoadWrapper>
  );
};

export default Products;
