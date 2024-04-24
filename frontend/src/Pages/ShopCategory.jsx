import React from "react";
import "./Css/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { merchApi } from "../AppSetup/api";

const ShopCategory = (props) => {
  const { data, isLoading } = merchApi.useGetCollectionsQuery();
  const checkCategory = data?.collection?.find(
    (category) => category.type === props.category
  );
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
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
