import React from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import { merchApi } from "../../AppSetup/api";

const RelatedProducts = () => {
  const { data, isLoading } = merchApi.useGetCollectionsQuery();
  const data_product =
    data?.collection.flatMap((collection) => collection.clothes) || [];
  const shuffledProducts = data_product.sort(() => 0.5 - Math.random());
  const relatedProducts = shuffledProducts.slice(0, 4); // Get 4 random products

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          relatedProducts.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                description={item.description}
                image={item.image}
                quantity={item.quantity}
                new_price={item.price}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
