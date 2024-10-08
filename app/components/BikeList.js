 "use client"
import React,{ useState } from 'react'

const bikeData=[
    {
        id:0,
        img:"/bike.webp",
        title:"GIXXER SF",
        price:"1,45,900",
    },
    {
        id:1,
        img:"/bike.webp",
        title:"GIXXER SF",
        price:"1,45,900",
    },
    {
        id:2,
        img:"/bike.webp",
        title:"GIXXER SF",
        price:"1,45,900",
    },
    {
        id:3,
        img:"/bike.webp",
        title:"GIXXER SF",
        price:"1,45,900",
    },
    {
        id:4,
        img:"/bike.webp",
        title:"GIXXER SF",
        price:"1,45,900",
    },
    {
        id:5,
        img:"/bike.webp",
        title:"GIXXER SF",
        price:"1,45,900",
    },
    {
        id:6,
        img:"/bike.webp",
        title:"GIXXER SF",
        price:"1,45,900",
    },
    {
        id:7,
        img:"/bike.webp",
        title:"GIXXER SF",
        price:"1,45,900",
    }
];


function BikeList() {
    const[btnOne,setBtnOne]=useState({backgroundColor:"white",color:"gray",border:""});
    const[btnTwo,setBtnTwo]=useState({backgroundColor:"white",color:"gray",border:""});    
    const[btnThree,setBtnThree]=useState({backgroundColor:"white",color:"gray",border:""});
    
function handleBtnOneClick() {
    setBtnOne({backgroundColor:"blue",color:"white",border:"none"})
    setBtnTwo({backgroundColor:"white",color:"gray"});    
    setBtnThree({backgroundColor:"white",color:"gray"});
}
function handleBtnTwoClick() {
    setBtnOne({backgroundColor:"white",color:"gray"})
    setBtnTwo({backgroundColor:"blue",color:"white",border:"none"});    
    setBtnThree({backgroundColor:"white",color:"gray"});
}
function handleBtnThreeClick() {
    setBtnOne({backgroundColor:"white",color:"gray"})
    setBtnTwo({backgroundColor:"white",color:"gray"});    
    setBtnThree({backgroundColor:"blue",color:"white",border:"none"});
}

  return (
    
    <div className='container  mt-16 w-full items-center justify-between'>
    <div className='border-b-[2px]'>
        <h1 className='text-blue-800 text-3xl font-bold'>EXPLORE OUR RANGE</h1>
        <div className='flex gap-4 my-4'> 
            {/* <div className='border-solid border-2 border-gray-300 text-xs text-gray-500 px-4 py-1 rounded-full font-bold hover:text-white hover:bg-blue-800 hover:border-none'>MOTORCYCLES</div>
            <div className='border-solid border-2 border-gray-300 text-xs text-gray-500 px-10 py-1 rounded-full font-bold hover:text-white hover:bg-blue-800 hover:border-none'>SCOOTERS</div>
            <div className='border-solid border-2 border-gray-300 text-xs text-gray-500 px-16 py-1 rounded-full font-bold hover:text-white hover:bg-blue-800 hover:border-none'>ALL</div> */}
        

        <button style={{background:btnOne.backgroundColor,color:btnOne.color,border:btnOne.border}} onClick={handleBtnOneClick} className='border-2 border-gray-300 text-xs text-gray-500 w-32 py-2 rounded-full font-bold'>MOTORCYCLES</button>
            <button  style={{background:btnTwo.backgroundColor,color:btnTwo.color,border:btnTwo.border}} onClick={handleBtnTwoClick} className='border-2 border-gray-300 text-xs text-gray-500 w-32 py-2 rounded-full font-bold hover:text-white hover:bg-blue-800'>SCOOTERS</button>
            <button  style={{background:btnThree.backgroundColor,color:btnThree.color,border:btnThree.border}} onClick={handleBtnThreeClick} className='border-2 border-gray-300 text-xs text-gray-500 w-32 py-2 rounded-full font-bold hover:text-white hover:bg-blue-800'>ALL</button>
        </div>
    </div>

    <div className='grid grid-cols-3 gap-6 place-items-center mt-20'>
        {bikeData.map((item,index)=>
            <div className='items-center text-center mb-10'>
                <div className='border border-solid border-gray-50 rounded-lg'>
                    <img src={item.img} width={300} height={300}/>
                </div>
                <p className='text-blue-800 font-bold mt-4'>{item.title}</p>
                <p><b>Rs. {item.price}*</b> onwards</p>
            </div>
        )}
    </div>




    </div>
  )
}

export default BikeList