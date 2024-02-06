import React from "react";
import {
  FaCartShopping,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { FaHeart, FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { BsHouseAddFill } from "react-icons/bs";

import logo from "./../assets/brand/logo.png";

function header() {
  return (
    <div className="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div>
              <ul className="ul-row left">
                <li>
                  <a href="mailto:holidayplanner@gmail.com">
                    <span className="icon">
                      <FaEnvelope />
                    </span>
                    <span className="text">info@realtor.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:1234567890">
                    <span className="icon">
                      <FaPhoneAlt />
                    </span>
                    <span className="text">+1(123)456-7890</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="ul-row right">
                <li>
                  <a href="">
                    <span className="icon">
                      <FaFacebookF />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="icon">
                      <FaInstagram />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="icon">
                      <FaTwitter />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="icon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-header">
          <div className="row">
            <div className="brand">
              <a href="">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="navlinks">
              <ul className="ul-row">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="nav-action">
              <ul className="ul-row">
                <li>
                  <a href="">
                    <span className="row btn">
                      <span>
                        <BsHouseAddFill />
                      </span>Add Property
                    </span>
                  </a>
                </li>
                <li>
                  <button className="fav icon">
                    <FaHeart />
                  </button>
                </li>
                <li>
                  <button className="cart icon">
                    <FaCartShopping />
                  </button>
                </li>
                <li>
                  <button className="user icon">
                    <FaUserAlt />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
