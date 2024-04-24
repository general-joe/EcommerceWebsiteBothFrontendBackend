import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import { merchApi } from "../../AppSetup/api";

const Popular = () => {
  const { data, isLoading } = merchApi.useGetCollectionsQuery();
  const collections = data?.collection[1]?.clothes;
  const womenClothes = collections ? collections.slice(0, 4) : [];
  const isWomenClothesEmpty =
    Array.isArray(womenClothes) && womenClothes.length === 0;
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {isLoading ? (
          <div className="loader"></div>
        ) : isWomenClothesEmpty ? (
          <div>No products to display yet.</div>
        ) : (
          womenClothes.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              description={item.description}
              image={item.image}
              quantity={item.quantity}
              new_price={item.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Popular;
