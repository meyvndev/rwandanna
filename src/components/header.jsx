import React, { useState } from "react";
import {
  FaCartShopping,
  FaCircleQuestion,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLock,
  FaRegBookmark,
  FaTwitter,
} from "react-icons/fa6";
import {
  FaHeart,
  FaPhoneAlt,
  FaRegUserCircle,
  FaTrashAlt,
  FaUserAlt,
} from "react-icons/fa";
import { BsHouseAddFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdFeedback, MdOutlineLogout } from "react-icons/md";

import logo from "./../assets/brand/logo.png";
import user from "./../assets/user/user1.jpeg";
import house from "./../assets/user/user1.jpeg";

function header() {
  const [showProfile, setShowProfile] = useState(false);
  const [showFavourite, setShowFavourite] = useState(false);

  const toggleProfileModal = () => {
    setShowProfile((prevState) => !prevState);
  };

  const toggleFavouritesModal = () => {
    setShowFavourite((prevState) => !prevState);
  };

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
                      </span>
                      Add Property
                    </span>
                  </a>
                </li>
                <li>
                  <button
                    className="fav icon"
                    title="Favorites"
                    onClick={toggleFavouritesModal}
                  >
                    <FaHeart />
                  </button>
                </li>
                <li>
                  <button className="cart icon" title="Saved">
                    <FaRegBookmark />
                  </button>
                </li>
                <li>
                  <button
                    className="user icon"
                    title="User Profile"
                    onClick={toggleProfileModal}
                  >
                    <FaUserAlt />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {showProfile && (
        <div className="model-overlay" onClick={toggleProfileModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="user-modal">
              <div className="modal-user-id">
                <div>
                  <img src={user} />
                </div>
                <div>
                  <h3>Michael B. Jordan</h3>
                  <p>Platform Admin</p>
                </div>
              </div>
              <div className="modal-user-setting-list">
                <div className="modal-user-setting">
                  <div className="setting-icon">
                    <FaRegUserCircle />
                  </div>
                  <div className="setting-text">
                    <h4>Your Profile</h4>
                  </div>
                </div>
                <div className="modal-user-setting">
                  <div className="setting-icon">
                    <IoSettingsOutline />
                  </div>
                  <div className="setting-text">
                    <h4>Settings</h4>
                  </div>
                </div>
                <div className="modal-user-setting">
                  <div className="setting-icon">
                    <FaLock />
                  </div>
                  <div className="setting-text">
                    <h4>Privacy Center</h4>
                  </div>
                </div>
                <div className="modal-user-setting">
                  <div className="setting-icon">
                    <FaCircleQuestion />
                  </div>
                  <div className="setting-text">
                    <h4>Help & Support</h4>
                  </div>
                </div>
                <div className="modal-user-setting">
                  <div className="setting-icon">
                    <MdFeedback />
                  </div>
                  <div className="setting-text">
                    <h4>Send Feedback</h4>
                  </div>
                </div>
                <div className="modal-user-setting">
                  <div className="setting-icon">
                    <MdOutlineLogout />
                  </div>
                  <div className="setting-text">
                    <h4>Logout</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showFavourite && (
        <div className="modal-overlay" onClick={toggleFavouritesModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="favourite-modal">
              <div className="container">
                <div className="favourite-list">
                  <div className="favourite col-12">
                    <div>
                      <img src={house} alt="Product1" />
                    </div>
                    <div>
                      <h3>House for sale in Rebero, Kigali.</h3>
                      <p className="truncate">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Optio sunt nobis natus autem enim amet nostrum
                        ratione at.
                      </p>
                    </div>
                    <div><h2>$400</h2></div>
                    <div><button><FaTrashAlt/></button></div>
                  </div>
                  <div className="favourite col-12">
                    <div>
                      <img src={house} alt="Product1" />
                    </div>
                    <div>
                      <h3>House for sale in Rebero, Kigali.</h3>
                      <p className="truncate">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Optio sunt nobis natus autem enim amet nostrum
                        ratione at.
                      </p>
                    </div>
                    <div><h2 className="price">$400</h2></div>
                    <div><button><FaTrashAlt/></button></div>
                  </div>
                  <div className="favourite col-12">
                    <div>
                      <img src={house} alt="Product1" />
                    </div>
                    <div>
                      <h3>House for sale in Rebero, Kigali.</h3>
                      <p className="truncate">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Optio sunt nobis natus autem enim amet nostrum
                        ratione at.
                      </p>
                    </div>
                    <div><h2>$400</h2></div>
                    <div><button><FaTrashAlt/></button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default header;
