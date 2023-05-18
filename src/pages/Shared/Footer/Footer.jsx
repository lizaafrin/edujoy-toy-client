import React from "react";
import logo from "../../../../public/cover.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-16 p-10 bg-gray-900 text-gray-100">
        <div>
          <h2 className="font-bold text-3xl">EduJoyToy</h2>
          <p>Providing reliable service since 2010</p>
          <img className="w-28" src={logo} alt="" />
        </div>
        <div>
          <span className="footer-title">Services</span>

          <a className="link link-hover">Online Purchase</a>

          <a className="link link-hover">Cash on Delivery</a>

          <a className="link link-hover">Repair</a>

          <a className="link link-hover">Exchange</a>
        </div>

        <div>
          <span className="footer-title">About us</span>

          <a className="link link-hover">Our Sellers</a>

          <a className="link link-hover">Our Team</a>

          <a className="link link-hover">Shop</a>
        </div>

        <div>
          <span className="footer-title">What We Offer</span>

          <a className="link link-hover">Pricing</a>

          <a className="link link-hover">Discounted Products</a>

          <a className="link link-hover">Best Selling Products</a>

          <a className="link link-hover">Our Happy Customers</a>
        </div>

        <div>
          <span className="footer-title">Contact</span>

          <a className="link link-hover">
            G/F, 165 Temple Street, Jordan, Hong Kong
            T/A, 244 New Eskaton Road, Bangla Motor, Dhaka
          </a>

          <a className="link link-hover">+880-1710000003</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
