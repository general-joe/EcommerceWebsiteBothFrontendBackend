import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { addToCart } from "../../AppSetup/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductDisplay = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = React.useState(1);

  const incrementQuantity = () => {
    setItemQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setItemQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  return (
    <div className="flex mx-auto w-3/4 overflow-hidden gap-10 max-sm:m-0 max-sm:w-full max-md:flex-col">
      <div className="flex w-full gap-4 max-md:flex-col-reverse">
        <div className="flex flex-col w-50 gap-4 max-sm:flex-row max-sm:h-32 max-sm:w-full overflow-x-auto">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div class="m-0 w-full flex flex-col my-5">
        <h1 className="font-medium text-lg">{product.description}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            GHC{product.price}
          </div>
          <div className="productdisplay-right-price-old">GHC99.00</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close fitting and with
          a round neckline short sleeves, worn as an undershirt or outer
          garment.
        </div>
        {/* Quantity specifier */}
        <div className="productdisplay-right-quantity">
          <div className="flex items-center gap-5 w-full  justify-start p-2">
            <button className="btn w-5 h-5" onClick={decrementQuantity}>
              -
            </button>
            <p className="w-10 h-10 border-2 rounded-lg  text-center text-2xl">
              {itemQuantity}
            </p>
            <button className="btn w-5 h-5" onClick={incrementQuantity}>
              +
            </button>
          </div>
          <p>Available in stock: {product.quantity}</p>
        </div>
        <button
          class="right-button p-5 px-10 w-50 my-5 text-base font-semibold text-white bg-red-500 mb-10 border-none outline-none cursor-pointer"
          onClick={() => {
            const productData = {
              ...product,
              quantity: itemQuantity,
            };
            dispatch(addToCart(productData));
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category:</span>
          {product.gender}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
