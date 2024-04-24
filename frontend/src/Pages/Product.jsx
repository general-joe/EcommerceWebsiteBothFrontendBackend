import React from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import { merchApi } from "../AppSetup/api";

const Product = () => {
  const { productId } = useParams();
  const { data: all_product } = merchApi.useGetCollectionsQuery();
  const allClothes =
    all_product?.collection.flatMap((collection) => collection.clothes) || [];

  const product = allClothes.find((clothes) => clothes.id === productId);

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
