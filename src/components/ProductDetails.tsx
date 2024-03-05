import useSWR from "swr";
import { fetcher } from "../api";
import { useParams } from "react-router-dom";

import DataLoadWrapper from "./shared/DataLoadWrapper";
import StarRating from "./shared/StarRating";

const ProductDetails = () => {
  const params = useParams();

  const { data, isLoading, error } = useSWR(`/products/${params.id}`, fetcher);

  return (
    <DataLoadWrapper isLoading={isLoading} error={error} data={data}>
      <section id="product-details">
        {data ? (
          <div className="custom-container py-3 flex justify-center">
            <div className="w-1/3">
              <img
                className="w-full h-[350px] object-contain"
                src={data.image}
                alt="Product Detail"
              />
            </div>
            <div className="w-1/3 px-7 flex flex-col justify-between">
              <h1 className="font-bold text-[2rem]">{data.title}</h1>
              <div className="flex items-center justify-between">
                <span className="badge">{data.category}</span>
                <div className="flex items-center">
                  <p>{data.rating.rate}</p>
                  <StarRating />
                  <p className="text-[color:gray] text-[0.8rem]">
                    ({data.rating.count})
                  </p>
                </div>
              </div>
              <p>{data.description}</p>
              <h5 className="font-bold text-[1.6rem] text-[color:var(--main-color)]">
                {data.price} ₼
              </h5>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </DataLoadWrapper>
  );
};

export default ProductDetails;
