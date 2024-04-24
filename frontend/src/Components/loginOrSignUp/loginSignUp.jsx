import React from "react";
import logo from "../Assets/shopping-bags.svg";
import { useForm } from "react-hook-form";
import { SignupValidator } from "./data";
import { merchApi } from "../../AppSetup/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const LoginSignUp = () => {
  const [createUser, { isLoading }] = merchApi.useCreateUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: SignupValidator,
    mode: "all",
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const userData = {
      username: data.name,
      email: data.email,
      password: data.password,
    };
    const response = await createUser(userData);
    if (response.error) {
      console.log(response.error);
      toast.error(response.error.data.message);
      return;
    }

    setTimeout(() => {
      window.location.href = "/login";
    }, 3000);
  };
  return (
    <div className="w-full h-auto bg-pink-100 py-20">
      <div className="flex max-md:flex-col max-md:justify-center max-md:items-center gap-10 h-auto p-2 overflow-hidden justify-around">
        <img
          className="w-[500px] h-[450px] object-cover"
          src={logo}
          alt="img"
        />
        <div className="w-[580px] h-auto bg-white p-10 overflow-hidden">
          <h1 className="text-red-500 mt-5 mb-5 text-shadow text-2xl">
            Sign Up
          </h1>
          <form
            className="flex flex-col gap-7 mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("name", { required: true })}
              className="h-8 w-full pl-5 border border-gray-300 outline-none text-gray-700 text-lg"
              type="text"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 m-0 p-0">Name is required</p>
            )}
            <input
              {...register("email", { required: true })}
              className="h-8 w-full pl-5 border border-gray-300 outline-none text-gray-700 text-lg"
              type="email"
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 m-0 p-0">Email is required</p>
            )}
            <input
              {...register("password", { required: true })}
              className="h-8 w-full pl-5 border border-gray-300 outline-none text-gray-700 text-lg"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 m-0 p-0">Password is required</p>
            )}
            <div className="flex items-center gap-1 text-gray-700 text-sm font-medium">
              <input
                type="checkbox"
                name=""
                id=""
                className="form-checkbox h-3 w-3"
                required
              />
              <p>
                By continuing, I agree to the terms of use & privacy policy.
              </p>
            </div>
            <button
              type="submit"
              className="w-full h-8 bg-red-500 text-white mt-0 font-medium text-lg"
            >
              {isLoading ? (
                <div className="loader"></div>
              ) : (
                <span>Create Account</span>
              )}
            </button>
            <p className=" text-gray-700 text-sm font-medium">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold hover:underline text-[#EF4444]"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
