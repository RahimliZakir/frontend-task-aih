import useSWR from "swr";
import { fetcher } from "../api";

import DataLoadWrapper from "./shared/DataLoadWrapper";

const Products = () => {
  const { data, isLoading, error } = useSWR("/products", fetcher);

  return (
    <DataLoadWrapper isLoading={isLoading} error={error}>
      <section id="products">
        <div className="custom-container grid grid-cols-4 gap-5">
          {data?.map((item: any) => {
            return (
              <div
                key={item.id}
                className="border rounded-[5px] overflow-hidden mt-3 hover:shadow-md duration-300"
              >
                <a href="#">
                  <div className="bg-white">
                    <img
                      className="w-full h-[300px] object-contain"
                      src={item.image}
                      alt="Product"
                    />
                  </div>
                  <div className="p-3 border-t-[1px] font-semibold">
                    <h4>{item.title}</h4>
                    <p className="text-[color:var(--main-color)]">
                      {item.price} ₼
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </DataLoadWrapper>
  );
};

export default Products;
