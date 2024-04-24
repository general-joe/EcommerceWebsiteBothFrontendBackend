import React from "react";
import "./Css/ShopCategory.css";

import Item from "../Components/Item/Item";
import { merchApi } from "../AppSetup/api";

const ShopCategory = (props) => {
  const { data, isLoading } = merchApi.useGetCollectionsQuery();
  const checkCategory = data?.collection?.find(
    (category) => category.type === props.category
  );
  return (
    <div className="shop-category">
      <div className="p-6 w-full h-[260px] mx-auto">
        <img className="mx-auto w-auto h-full" src={props.banner} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-7.5 row-gap-20">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          checkCategory?.clothes?.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              description={product.description}
              quantity={product.quantity}
              new_price={product.price}
              image={product.image}
            />
          ))
        )}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
