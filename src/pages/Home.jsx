import React from 'react'
import Hero from './hero'
import Catalog from './catalog'
import Popular from './popular'
import OrderSteps from './orderSteps'
import SpecialOccasion from './specialOcassion'
import Questions from './questions'

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <Catalog />
      <Popular />
      <OrderSteps />
      <SpecialOccasion />
      <Questions />
    </main>
  )
}

export default Home