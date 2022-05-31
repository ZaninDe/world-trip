import type { NextPage } from 'next'
import { NavTravelTypes } from '../components/NavTravelTypes'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { ContinentSlide } from '../components/ContinenSlide'

import axios, { AxiosResponse } from 'axios'
import cors from 'cors'

const Home: NextPage = () => {

  async function getUser<PromiseResult>() {
    try {
      const continent = await axios.get('https://cricket.sportmonks.com/api/v2.0/continents?api_token=tG9FLjHuevzpR01cIc2UrPTfW4fVmDxvYTeMpv8zilG0rRPkNKDNVfL4hImL',).then(
        res => res.data
      );
      console.log(continent);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {/* <h1>{user.data.login}</h1> */}
      <Banner />
      <NavTravelTypes />
      <ContinentSlide />
      <button onClick={getUser}>click me</button>
    </>
  )
}

export default Home
