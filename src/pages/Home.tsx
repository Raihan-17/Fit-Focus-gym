
// import Benefits from './Benefits'
// import OurClasses from './OurClasses'
// import Contact from './Contact'
import Trainers from './Trainers'
import Hpage from './Hpage'

import BodyPartsPage from './exercises/BodyPartsPage'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hpage setSelectedPage={() => {}} />
      <Trainers />
      <BodyPartsPage />
      {/* <Benefits/>
      <OurClasses/>
      <Contact/> */}
    </div>
  )
}

export default Home