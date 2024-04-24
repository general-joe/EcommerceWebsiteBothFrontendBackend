import React from "react";
import { useForm } from "react-hook-form";
import { LoginValidator } from "./data";
import logo from "../Assets/shopping-bags.svg";
import { merchApi } from "../../AppSetup/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../AppSetup/slices/userSlice";

function Login() {
  const [loginUser, { isLoading }] = merchApi.useLoginUserMutation();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: LoginValidator,
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    const response = await loginUser(userData);
    if (response.error) {
      console.log(response.error);
      toast.error(response.error.message);
      return;
    }
    const { ...user } = response.data;
    dispatch(setUser(user));
    toast.success("Successful, redirecting to home!");
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
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
            Log In
          </h1>
          <form
            className="flex flex-col gap-7 mt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <button
              type="submit"
              className="w-full h-8 bg-red-500 text-white mt-0 font-medium text-lg"
            >
              {isLoading ? <div className="loader"></div> : <span>Login</span>}
            </button>
            <p className=" text-gray-700 text-sm font-medium">
              New here?{" "}
              <a
                href="/signup"
                className="font-semibold hover:underline text-[#EF4444]"
              >
                Signup here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
