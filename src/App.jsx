import React from 'react'
import {
  Hero, 
  CustomerReviews, 
  PopularProduct, 
  Services, 
  Subscribe, 
  Footer, 
  SpecialOffer, 
  SuperQuality
} from './sections/index'
import Nav from './components/Nav'

const App = () => (
  <main className='relative'>
    <Nav/>
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>

    <section className='padding'>
      <PopularProduct />
    </section>

    <section className='padding'>
      <SuperQuality />
    </section>

    <section className='padding-x py-10'>
      <Services />
    </section>

    <section className='padding'>
      <SpecialOffer />
    </section>

    <section className='padding bg-gray-200'>
      <CustomerReviews />
    </section>

    <section className='padding'>
      <Subscribe />
    </section>

    <section className='bg-black padding-x padding-t pb-8'>
      <Footer />
    </section>

  </main>
);

export default App