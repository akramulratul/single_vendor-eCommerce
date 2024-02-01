import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/6">
              READY TO WEAR
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/5">
              NEW ARRIVALS
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              TOPS
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            <img src="/img/logo.png" alt="" height="50px" width="50px" />
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/products/2">
              BOTTOMS
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              JEWELLERY
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">
              BAG
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
