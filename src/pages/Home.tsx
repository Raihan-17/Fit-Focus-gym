import React from 'react'
import Benefits from './Benefits'
import OurClasses from './OurClasses'
import Contact from './Contact'
import Trainers from './Trainers'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Benefits/>
        <OurClasses/>
        <Trainers/>
        <Contact/>
    </div>
  )
}

export default Home