import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { getPriceColorClass, getQuantityColorClass } from "../../utils/feature";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Item = (props) => {
  const priceColorClass = getPriceColorClass(props.new_price);
  const quantityColorClass = getQuantityColorClass(props.quantity);
  const isOutOfStock = props.quantity === 0;
  return (
    <div className="w-72 hover:shadow-2xl transition-all ease-out hover:scale-105 duration-500 m-5 rounded-xl mx-auto">
      <Link to={`/product/${props.id}`}>
        <LazyLoadImage
          className="skeleton"
          width={320}
          height={400}
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
        />
      </Link>
      <div className="p-5">
        <p className="truncate">{props.description}</p>
        <p className="font-medium">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
            Stock -{" "}
          </span>
          <span className={`font-normal text-lg ${quantityColorClass}`}>
            {isOutOfStock ? "Out of Stock" : props.quantity}
          </span>
        </p>
        <div className="item-prices">
          <div className="item-price-new">
            <span
              className={`text-xl ${priceColorClass} text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500`}
            >
              GHC {props.new_price}
            </span>
          </div>
          <p className="text-through">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
              GHC99.99
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
