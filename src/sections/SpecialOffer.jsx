import React from 'react'
import {offer} from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} 
          className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
              
          <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            <br/>
            <span className='text-coral-red inline-block mt-3'>Special</span> Offers
          </h2>
          
          <p className='lg:max-w-lg mt-4 info-text'>
            Ensuring premium comfort and style, our meticulously crafted footwear is designed 
            to elevate your experience, providing you with unmatched quality, innovation, and 
            a touch of elegance.
          </p>

          <p className='mt-6 lg:max-w-lg info-text'>
            It's FREE It's 30% OFF It's Available Right now!
          </p>

          <div className='flex flex-wrap mt-11 gap-4'>
            <Button 
              label="View Details"
            />
            <Button 
              label="Learn More"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
    </section>
  )
}

export default SpecialOffer