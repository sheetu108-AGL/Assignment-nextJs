import Link from "next/link";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

function Dealership() {
  return (
    <div className="container mb-32">
      <h3 className="font-bold mb-6">KNOW OUR DEALERSHIP</h3>
      <p className="font-medium text-sm">
        Adharvaa Suzuki is an authorized dealer of Suzuki motorcycles and bikes.
        Our commitment goes beyond selling exceptional Suzuki models.Adharvaa
        Suzuki is an authorized dealer of Suzuki motorcycles and bikes. Our
        commitment goes beyond selling exceptional Suzuki models.
      </p>
      <div className="bg-blue-900 text-white mt-12 mb-12 px-8 border rounded-md py-12">
        <p className="text-3xl font-medium mb-4">LOCATE US</p>
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center justify-between">
            <MdLocationOn className="mr-2 text-xl" />
            <span className="text-xs">
              5, Avinashi Rd, Masakalipalayam, <br />
              coimbatore, Tamil Nadu 641004
            </span>
          </div>
          <div className="flex items-center justify-between">
            <CiPhone className="mr-2 text-xl" />
            <span className="text-xs">9876545678</span>
          </div>
          <div className="flex items-center justify-between">
            <CiMail className="mr-2 text-xl" />
            <Link href="/">sales.suzuki@Adharvaa.in</Link>
          </div>
          <div>
            <button className="bg-red-600 border-none rounded-sm px-24 py-2">
              GET DIRECTION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dealership;
