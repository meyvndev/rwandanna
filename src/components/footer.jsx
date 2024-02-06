import React from "react";

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import logo from "./../assets/brand/logo.png";

function footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <div className="container">
          <div className="row">
            <div>
              <h1>Want To Become a Real Estate Agent?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <div>
              <a href="">signup today</a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div>
                <img src={logo} alt="" />
                <ul>
                  <li>
                    <a href="">KN 7 Ave, Kigali</a>
                  </li>
                  <li>
                    <a href="">+1234567890</a>
                  </li>
                  <li>
                    <a href="">info@rwandan.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <h2>Navigations</h2>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h2>The Highlights</h2>
              <ul>
                <li>
                  <a href="">Apartment</a>
                </li>
                <li>
                  <a href="">My Houses</a>
                </li>
                <li>
                  <a href="">Condos</a>
                </li>
                <li>
                  <a href="">Villas</a>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h2>Agent & Agency</h2>
              <ul>
                <li>
                  <a href="">Agency List</a>
                </li>
                <li>
                  <a href="">Agency Details</a>
                </li>
                <li>
                  <a href="">Agents List</a>
                </li>
                <li>
                  <a href="">Agent Details</a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h2>Popular  Searches:</h2>
              <ul>
                <li>
                  <a href="">Apartment for Rent</a>
                </li>
                <li>
                  <a href="">Apartment Low to High</a>
                </li>
                <li>
                  <a href="">Offices for Rent</a>
                </li>
                <li>
                  <a href="">Lands in Country-side</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="social">
          <p>Follow us on social media!</p>
          <ul className="ul-row">
            <li><a href=""><FaFacebookF/></a></li>
            <li><a href=""><FaInstagram/></a></li>
            <li><a href=""><FaTwitter/></a></li>
            <li><a href=""><FaLinkedinIn/></a></li>
            <li><a href=""><FaYoutube/></a></li>
            <li><a href=""><FaTiktok/></a></li>
            <li><a href=""><FaEnvelope/></a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Rwanda Luxury Marketplace - Proudly
        developed by <a href="">Iwmvictor</a> from{" "}
        <a href="">Meyvn Software Agency</a>
      </div>
    </div>
  );
}

export default footer;
