import React from 'react'
import Carousel from '../../components/user/home/Carousel'
import Categories from '../../components/user/home/Categories'
import Featured from '../../components/user/home/Featured'
import FeaturedProdcuts from '../../components/user/home/FeaturedProdcuts'
import RecentProducts from '../../components/user/home/RecentProducts'
import SpecialOffer from '../../components/user/home/SpecialOffer'
import Vendors from '../../components/user/home/Vendors'


const Home = () => {
  return (
    <>
    
    <Carousel/>
    <Featured/>
    {/* <Categories/> */}
    <FeaturedProdcuts/>
    {/* <SpecialOffer/> */}
    {/* <RecentProducts/> */}
    {/* <Vendors/> */}
    </>
  )
}

export default Home