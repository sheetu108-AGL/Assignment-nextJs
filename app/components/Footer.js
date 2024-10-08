import React from "react";
import { MdLocationOn } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  return (
    <footer className="">
      <div className="flex justify-evenly items-start text-sm mb-12">
        <ol className="space-y-6">
          <li className="-mt-16 -mb-12">
            <img
              src="/Suzuki-Logo.wine.png"
              width={250}
              height={70}
              alt="logo"
            ></img>
          </li>
          <li className="flex justify-start items-center ml-8">
            <MdLocationOn className="mr-2 text-blue-800 text-xl" />
            <span className="text-xs">
              5, Avinashi Rd, Masakalipalayam, <br />
              coimbatore, Tamil Nadu 641004
            </span>
          </li>
          <li className="flex justify-start items-center ml-8">
            <CiPhone  className="mr-2 text-blue-800 text-xl" />
            <span className="text-xs">9876545678</span>
          </li>
        </ol>
        <ol className="space-y-2">
          <li className="font-bold">Big Bikes</li>
          <li>V-Storm 800DE</li>
          <li>Katana</li>
          <li>Hayabusa</li>
        </ol>
        <ol className="space-y-2">
          <li className="font-bold">Scooters</li>
          <li>Avenis</li>
          <li>Access 12</li>
          <li>Burgman Street</li>
          <li>Burgman Street EX</li>
        </ol>
        <ol className="space-y-2">
          <li className="font-bold">Quick Links</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Parts & Accessories</li>
          <li>community</li>
        </ol>
      </div>

      <div className="bg-blue-800 py-4 px-36 flex justify-between items-center text-white">
        <div className="flex justify-between items-start gap-3 text-2xl">
          <FaFacebook />
          <IoLogoInstagram />
        </div>
        <div className="flex justify-center items-center">
          <span className="text-xs">@ 2022 Suzuki Motorbikes</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
