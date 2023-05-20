import React from "react";
import logo from "../../../../public/cover.png"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-16 p-10 bg-purple-200 text-gray-500">
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
          <span className="footer-title">Contact</span>

          <a className="link link-hover">
            G/F, 165 Temple Street, Jordan, Hong Kong
            T/A, 244 New Eskaton Road, Bangla Motor, Dhaka
          </a>
          <a className="link link-hover">+880-1710000003</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a href=""><FaFacebook></FaFacebook></a>
            <a href=""><FaTwitter></FaTwitter></a>
            <a href=""><FaYoutube></FaYoutube></a>
          </div>
        </div>
      </footer>
      <div className="bg-purple-200 text-black text-center pb-10">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
