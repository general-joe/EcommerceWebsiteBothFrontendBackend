import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { merchApi } from "../AppSetup/api";
import { emptyCart, getTotalCartAmount } from "../AppSetup/slices/cartSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom/dist";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createOrder, { isLoading }] = merchApi.useCreateOrderMutation();

  const onSubmit = async (payload) => {
    const delivery = getTotalCartAmount(cartItems) == 0 ? 0 : 2;
    const orderInfo = {
      ...payload,
      deliveryFee: delivery.toString(),
      subTotal: getTotalCartAmount(cartItems),
    };
    console.log(orderInfo);
    const response = await createOrder(orderInfo);
    if (response.error) {
      console.log("Error", response.error);
      toast.error(response.error.data);
    }
    dispatch(emptyCart());
    toast.success("Order Placed Successfully!");
    navigate("/");
  };

  return (
    <form
      className="flex flex-col gap-20 md:flex-row md:justify-between md:gap-50 mt-20 p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full md:max-w-1/3">
        <p className="text-2xl font-semibold mb-2">Delivery Information</p>
        <div className="flex gap-2">
          <input
            type="text"
            {...register("firstname", { required: true })}
            placeholder="First Name"
            className="w-full p-2 border my-2 border-gray-300 rounded outline-none"
          />
          {errors.firstname && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            type="text"
            {...register("lastname", { required: true })}
            placeholder="Last Name"
            className="w-full p-2 border my-2 border-gray-300 rounded outline-none"
          />
          {errors.lastname && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email Address"
          className="w-full p-2 border my-2 border-gray-300 rounded outline-none"
        />
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
        <input
          type="text"
          {...register("street_name", { required: true })}
          placeholder="Street Name"
          className="w-full p-2 border my-2 border-gray-300 rounded outline-none"
        />
        {errors.street && (
          <span className="text-red-500">This field is required</span>
        )}
        <div className="multi-fields">
          <input
            type="text"
            {...register("city", { required: true })}
            placeholder="City"
            className="w-full p-2 border my-2 border-gray-300 rounded outline-none"
          />
          {errors.city && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            type="text"
            {...register("state", { required: true })}
            placeholder="State"
            className="w-full p-2 border my-2 border-gray-300 rounded outline-none"
          />
          {errors.state && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="multi-fields">
          <input
            type="number"
            {...register("zipcode", { required: true })}
            placeholder="Zip Code"
            className="w-full p-2 border my-2 border-gray-300 rounded outline-none"
          />
          {errors.zip_code && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            type="text"
            {...register("country", { required: true })}
            placeholder="Country"
            className="w-full p-2 border my-2 border-gray-300 rounded outline-none"
          />
          {errors.country && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <input
          type="text"
          {...register("phonenumber", { required: true })}
          placeholder="Phone Number"
          className="w-full p-2 border my-2 border-gray-300 rounded outline-none"
        />
        {errors.phonenumber && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div className="w-full md:max-w-2/3">
        <div className="cart-total">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="cart-total-details">
            <p className="font-semibold">Subtotal</p>
            <p>GH {getTotalCartAmount(cartItems)}</p>
          </div>
          <hr className="my-4" />
          <div className="cart-total-details">
            <p className="font-semibold">Delivery Fee</p>
            <p>GH {getTotalCartAmount(cartItems) == 0 ? 0 : 2}</p>
          </div>
          <hr className="my-4" />
          <div className="cart-total-details">
            <b className="font-semibold">Total</b>
            <b>
              GH{" "}
              {getTotalCartAmount(cartItems) == 0
                ? 0
                : getTotalCartAmount(cartItems) + 2}
            </b>
          </div>
          <button
            type="submit"
            className="w-64 h-14 mt-5 outline-none border-none bg-red-600 text-white text-base font-semibold cursor-pointer"
          >
            {isLoading ? <div className="loader"></div> : "PROCEED TO PAYMENT"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
