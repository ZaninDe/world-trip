import type { NextPage } from 'next'
import { NavTravelTypes } from '../components/NavTravelTypes'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { ContinentSlide } from '../components/ContinenSlide'

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <NavTravelTypes />
      <ContinentSlide />
    </>
  )
}

export default Home
