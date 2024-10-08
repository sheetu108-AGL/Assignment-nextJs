import React from 'react'
import BikeList from './components/BikeList'
import MoreFromUs from './components/moreFromUs'
import Dealership from './components/Dealership'
import Footer from './components/Footer'
import Card from './components/Card'


const page = () => {
  
  return (
    <div>
      
      <div className='flex justify-between items-center text-xs text-white bg-black pt-2 pb-2'>
        <span className='ml-32'>ADHARVAA SUZUKI</span>
        <span className='mr-32'>PREMIUM</span>
      </div>
      <BikeList/>
      <MoreFromUs/>
      <Dealership/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default page