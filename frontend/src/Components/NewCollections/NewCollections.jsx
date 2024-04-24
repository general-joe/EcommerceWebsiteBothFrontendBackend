import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import { merchApi } from "../../AppSetup/api";
import { generateRandomProduct } from "../../utils/feature";

const NewCollections = () => {
  const { data, isLoading } = merchApi.useGetCollectionsQuery();
  const collections = data?.collection[2]?.clothes;
  const new_collection = collections ? collections.slice(0, 8) : [];
  const isNewCollectionEmpty =
    Array.isArray(new_collection) && new_collection.length === 0;
  const mainCollection = generateRandomProduct(new_collection);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {isLoading ? (
          <div className="loader"></div>
        ) : isNewCollectionEmpty ? (
          <div>No products to display yet.</div>
        ) : (
          mainCollection.map((item) => (
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

export default NewCollections;
