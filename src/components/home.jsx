import React, { useState, useEffect } from "react";

import {
  FaCaretDown,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

import heroImg1 from "./../assets/product/hero-img1.jpg";
import heroImg2 from "./../assets/product/hero-img2.jpg";
import heroImg3 from "./../assets/product/hero-img3.webp";

function home() {
  const slides = [
    {
      image: heroImg3,
      // heading: "Find Your Dream Home with Rwandanna",
      heading: "Explore the Finest Properties in the Heart of the City",
      paragraph:
        "Discover a curated selection of homes, apartments, and condos tailored to your lifestyle. Whether you're searching for a cozy studio or a luxurious penthouse, Rwandanna offers unparalleled listings to match your preferences seamlessly.",
    },
    {
      image: heroImg1,
      // heading: "Your Gateway to Exceptional Living",
      heading: "Experience Unrivaled Comfort and Convenience",
      paragraph:
        "Welcome to Rwandanna, where your search for the perfect home ends. With a diverse range of properties and expert agents ready to assist you every step of the way, finding your ideal living space has never been easier. Begin your journey towards a life of comfort and luxury today.",
    },
    {
      image: heroImg2,
      // heading: "Invest Wisely, Invest with Rwandanna",
      heading: "Unlock Opportunities in the Real Estate Market",
      paragraph:
        "Explore lucrative investment options with Rwandanna's comprehensive portfolio of properties. From prime commercial spaces to promising residential developments, our platform connects you with the opportunities you need to grow your portfolio. Start building your wealth with confidence and security with Rwandanna.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Auto slide transition
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="home">
      <div className="hero">
        <section className="home-banner">
          <div className="banner-slider">
            <img src={slides[currentSlide].image} alt="Banner" />
            <div className="slider-text">
              <h1>
                {slides[currentSlide].heading}
                <p></p>
                <span>{slides[currentSlide].subheading}</span>
              </h1>
              <p>{slides[currentSlide].paragraph}</p>
            </div>
          </div>
          <div className="slide-nav-btn container">
            <div className="swiper-button-prev" onClick={prevSlide}>
              <span className="slider">
                <FaChevronLeft />
              </span>
            </div>
            <div className="swiper-button-next" onClick={nextSlide}>
              <span className="slider">
                <FaChevronRight />
              </span>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="hero-search">
            <form className="">
              <div className="col-12 row">
                <div className="banner-form-input col-3">
                  <span className="input-box input-placeholder">
                    <div className="icon">
                      <FaMapMarkerAlt />
                    </div>
                    <select className="form-input">
                      <option value="" disabled selected>
                        Select Type
                      </option>
                      <option value="choice0">Buy</option>
                      <option value="choice1">Rent</option>
                    </select>
                    <span className="arrow">
                      <FaCaretDown />
                    </span>
                  </span>
                </div>

                <div className="banner-form-input col-3">
                  <span className="input-box input-placeholder">
                    <div className="icon">
                      <FaMapMarkerAlt />
                    </div>
                    <select className="form-input">
                      <option value="" disabled selected>
                        Choose Province
                      </option>
                      <option value="choice0">Whole Country</option>
                      <option value="choice1">Kigali City</option>
                      <option value="choice2">Northern Province</option>
                      <option value="choice3">Eastern Province</option>
                      <option value="choice3">Southern Province</option>
                      <option value="choice3">Western Province</option>
                    </select>
                    <span className="arrow">
                      <FaCaretDown />
                    </span>
                  </span>
                </div>

                <div className="banner-form-input col-3">
                  <span className="input-box input-placeholder">
                    <div className="icon">
                      <FaMapMarkerAlt />
                    </div>
                    <select className="form-input">
                      <option value="" disabled selected>
                        Choose District
                      </option>
                      <option value="choice0">Whole Province</option>
                      <option value="choice1">District 1</option>
                      <option value="choice2">District 2</option>
                      <option value="choice3">District 3</option>
                    </select>
                    <span className="arrow">
                      <FaCaretDown />
                    </span>
                  </span>
                </div>
                <div className="banner-form-input col-2 form-btn">
                  <span className="input-box ">
                    <button className="button">find now</button>
                  </span>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default home;
