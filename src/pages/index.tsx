import type { NextPage } from 'next'
import { NavTravelTypes } from '../components/NavTravelTypes'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <NavTravelTypes />
    </>
  )
}

export default Home
