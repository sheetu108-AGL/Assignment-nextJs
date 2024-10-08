import Link from 'next/link'
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='sticky top-0 left-0 flex w-full pt-2 items-center justify-around bg-[#FBFBFB] shadow-md'>
      <Image src='/Suzuki-Logo.wine.png' width={150} height={40} className='-mt-3'/>
      <ol className='flex justify-center items-center gap-3 font-semibold text-xs text-black'>
        <li>ABOUT US</li>
        <li>SERVICE</li>
        <li>FINANCE</li>
        <li>INSURANCE</li>
        <li>PRODUCT</li>
        <li>COMMUNITY</li>
        <li>CONTACT US</li>
        <li>|</li>
        <li className='text-lg'><IoSearchOutline /></li>
        <li className='flex justify-center items-center text-sm gap-1 bg-red-600 text-white px-3 py-2 rounded-md'>
            <CiPhone className='text-lg'/>
            9878976543
          
        </li>
      </ol>
        {/* <div ><Image src='/Suzuki-Logo.wine.png' width={150} height={50} alt='logo'></Image></div> */}
        {/* <div className='flex w-fit gap-4 font-semibold pt-6 text-sm'>
            <Link className="navbar_link relative capitalize text-black no-underline" href="#">about us</Link>
            <Link className="navbar_link relative capitalize text-black no-underline" href="#">service</Link>
            <Link className="navbar_link relative capitalize text-black no-underline" href="#">finance</Link>
            <Link className="navbar_link relative capitalize text-black no-underline" href="#">insurance</Link>
            <Link className="navbar_link relative capitalize text-black no-underline " href="#">product</Link>
            <Link className="navbar_link relative capitalize text-black no-underline " href="#">community</Link>
            <Link className="navbar_link relative capitalize text-black no-underline " href="#">contact us</Link>
            <p>|</p>
            <p className='mt-1 text-xl'><IoSearchOutline /></p>
            <div className='flex justify-center items-center gap-2 bg-red-600 rounded-md px-2 pt-2 text-white'>
                <p><CiPhone /></p>
                <p>9878976543</p>
            </div>
        </div> */}
    </div>
  )
}

export default Navbar