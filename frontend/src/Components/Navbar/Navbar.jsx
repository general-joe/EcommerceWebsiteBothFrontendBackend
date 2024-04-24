import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import nav_dropdown from "../Assets/nav_dropdown.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../AppSetup/slices/userSlice";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const getTotalCartQuantity = (items) => {
    return items?.reduce((qty, item) => Number(item.quantity) + qty, 0);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>
          <Link to="/">MerchUp</Link>
        </p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {user?.id ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="user-profile"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p>Welcome: {user?.email}</p>
              </li>
              <li>
                <a
                  className="text-red-600"
                  onClick={() => dispatch(logoutUser())}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <button className="cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
        <Link to="/cart" className="cursor-pointer">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">
          {
            // Add the function
            getTotalCartQuantity(cartItems)
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
