import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/popular/Popular'
import Offer from '../component/offer/Offer'
import NewCollection from '../component/Newcollection/NewCollection'
import NewssLetter from '../component/newsletter/Newssletter'
import Footer from '../component/Footer/Footer'
const Shop = () => {
  return (
    <>
    < Hero />
    <Popular />
    <Offer />
    <NewCollection/>
    <NewssLetter />
    <Footer />
    </>
  );
}

export default Shop;