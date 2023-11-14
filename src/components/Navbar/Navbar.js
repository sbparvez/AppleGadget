import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [search, setSearch] = useState(false);
  const handleSearchClick = () => setSearch(!search);

  //   const [hidden, setHidden] = useState(true);
  //   const [size, setSize] = useState(undefined);
  //   useEffect(() => {
  //     const handleHidden = () => {
  //       setHidden(window.innerWidth < 1080 ? !hidden : hidden);
  //     };
  //     window.addEventListener("resize", handleHidden);
  //     handleHidden();
  //     return () => window.removeEventListener("resize", handleHidden);
  //   }, []);

  return (
    <nav>
      <div className="navbar">
        <div className="menubar" onClick={handleClick}>
          {click ? (
            <LiaTimesSolid
              size={35}
              style={{
                color: "#fff",
              }}
            />
          ) : (
            <AiOutlineMenu
              size={30}
              style={{
                color: "#fff",
              }}
            />
          )}
        </div>

        <div className="navlogo">
          <Link to="/">
            <img className="logo" src="img/logo.png" alt="" />
          </Link>

          <div className="search-box">
            <input type="search" name="" id="" placeholder="Search" />
            <BsSearch
              size={45}
              style={{
                color: "#f17e23",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 1rem",
              }}
            />
          </div>
        </div>

        <div className="navmenu">
          <div className="box-navit">
            <Link to="/">
              <img src="/img/gift.png" alt="" />
              <div className="text">
                <p className="txmain">Offers</p>
                <p className="txsec">Latest Offers</p>
              </div>
            </Link>
          </div>

          <div className="box-navit">
            <Link to="/">
              <img src="/img/cart.png" alt="" />
              <div className="text">
                <p className="txmain">Cart(0)</p>
                <p className="txsec">Add items</p>
              </div>
            </Link>
          </div>

          <div className="box-navit">
            <Link to="/">
              <img src="/img/shop.png" alt="" />
              <div className="text">
                <p className="txmain">Pre-Order</p>
                <p className="txsec">Order Today</p>
              </div>
            </Link>
          </div>

          <div className="box-navit">
            <Link to="/">
              <img src="/img/user.png" alt="" />
              <div className="text">
                <p className="txmain">Account</p>
                <p className="txsec">Register or Login</p>
              </div>
            </Link>
          </div>

          <div className="box-navit hide-it">
            <Link to="/">
              <img src="/img/compare.png" alt="" />
              <div className="text">
                <p className="txmain">Compare</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="search-ic" onClick={handleSearchClick}>
          <BsSearch
            size={45}
            style={{
              color: "#f17e23",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 1rem",
            }}
          />

          {(!search) ? null : (
            <div className="search-box show-search">
              <input type="search" name="" id="" placeholder="Search" />
              <BsSearch
                size={45}
                style={{
                  color: "#f17e23",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 1rem",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
