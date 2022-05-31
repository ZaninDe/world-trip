import type { NextPage } from 'next'
import { NavTravelTypes } from '../components/NavTravelTypes'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { ContinentSlide } from '../components/ContinenSlide'

import axios, { AxiosResponse } from 'axios'


const Home: NextPage = () => {

  async function getUser<PromiseResult>() {
    try {
     const user = await axios.get('https://api.github.com/users/ZaninDe').then(
      res => res.data
     );
      console.log(user.login);
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
