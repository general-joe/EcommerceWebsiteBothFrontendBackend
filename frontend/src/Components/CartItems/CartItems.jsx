import React from "react";
import "./CartItems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalCartAmount,
  removeFromCart,
} from "../../AppSetup/slices/cartSlice";
import { useNavigate } from "react-router-dom/dist";
import toast from "react-hot-toast";

const CartItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user.user);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price (GHC)</p>
        <p>Quantity</p>
        <p>Total(GHC)</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div>
            <div className="cartitems-format cartitems-format-main">
              <img src={item.image} alt="" className="carticon-product-icon" />
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button className="cartitems-quantity">{item.quantity}</button>
              <p>{(item.price * item.quantity).toFixed(2)}</p>
              <img
                className="cartitems-remove-icon"
                src={remove_icon}
                onClick={() => {
                  dispatch(removeFromCart(item.id));
                }}
                alt=""
              />
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div className="my-5">
          <h1 className="text-xl">Your Cart is Empty</h1>
          <p>Looks like you haven't added any items to the cart yet</p>
        </div>
      )}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>GHC {getTotalCartAmount(cartItems)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Delivery Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>GHC {getTotalCartAmount(cartItems)}</h3>
            </div>
          </div>
          <button
            onClick={() => {
              if (user?.id) {
                toast.warning("Please login to continue!");
              } else {
                navigate("/checkout");
              }
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
