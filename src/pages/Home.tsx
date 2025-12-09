import React from 'react'
import Benefits from './Benefits'
import OurClasses from './OurClasses'
import Contact from './Contact'
import Trainers from './Trainers'
import Hpage from './Hpage'
import TrainerCard from '../components/TrainerCard'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hpage/>
      {/* <TrainerCard/> */}
      <Benefits/>
      <OurClasses/>
      <Trainers/>
      <Contact/>
    </div>
  )
}

export default Home