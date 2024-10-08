import React from "react";
import { IoStar } from "react-icons/io5";


function Card() {
  return (
    <div className="border-b-2 mb-16">
      <div className="container">
        <h3 className="font-bold mb-8">OUR CUSTOMER'S EXPERIENCES</h3>
        <div className="flex justify-between items-center space-x-28 ">
          <div className="mb-10 space-y-4 flex flex-col items-center justify-center text-center p-4">
            <img
              src="/customer_img.jpg"
              alt="..."
              className=" rounded-md w-52 h-36"
            />
            <div>
              <p className='flex justify-center items-center text-yellow-500'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
              </p>
              <h5 className="">Rahul Badhania</h5>
              <p className="text-sm">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="mb-10 space-y-4 flex flex-col items-center justify-center text-center p-4">
            <img
              src="/customer_img.jpg"
              alt="..."
              className=" rounded-md w-52 h-36"
            />
            <div>
            <p className='flex justify-center items-center text-yellow-500'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
            </p>
              <h5 className="">Rahul Badhania</h5>
              <p className="text-sm">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="mb-10 space-y-4 flex flex-col items-center justify-center text-center p-4">
            <img
              src="/customer_img.jpg"
              alt="..."
              className=" rounded-md w-52 h-36"
            />
            <div>
            <p className='flex justify-center items-center text-yellow-500'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar />
            </p>
              <h5 className="">Rahul Badhania</h5>
              <p className="text-sm">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
