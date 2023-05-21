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
      {/* <div className="bg-purple-200 text-black text-center pb-10">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div> */}
      <div className=" bg-gray-800 text-white text-center py-5">
        <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current inline-block"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
        <p className="inline-block ms-10">Copyright © 2023 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
