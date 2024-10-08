import React from 'react'
import { RiMotorbikeFill } from "react-icons/ri";
import { AiFillInsurance } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { IoLogoModelS } from "react-icons/io";
import { IoLogoAngular } from "react-icons/io";
import Image from 'next/image';


const iconList=[
    {
        id:101,
        icon:<RiMotorbikeFill />,
        name:"SERVICE BOOKING",
    },
    {
        id:102,
        icon:<AiFillInsurance />,
        name:"INSURANCE",
    },
    {
        id:103,
        icon:<FaTools />,
        name:"ACCESSORIES",
    },
    {
        id:104,
        icon:<IoLogoModelS />,
        name:"FINANCE",
    },
    {
        id:105,
        icon:<IoLogoAngular />,
        name:"FINANCE",
    },
];

function MoreFromUs() {
  return (

    <div className='container mt-10 mb-10'>
        <h3 className='text-black text-center font-bold'>MORE FROM US</h3>
        <div className='flex justify-between gap-4 items-center mt-10'>
            {iconList.map((item,index)=>
                <div className='w-52  h-32 border border-solid rounded-md shadow flex flex-col justify-center items-center'>
                    <p className='text-4xl'>{item.icon}</p>
                    <p className='text-sm font-medium'>{item.name}</p>
                </div>
            )}
        </div>
        <img className='mt-10 w-full h-96' src='/adharvaa-suzuki.avif'/>
    </div>
  )
}

export default MoreFromUs