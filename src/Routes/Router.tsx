
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'

import Home from '../pages/Home'
import Benefits from '../pages/Benefits'
import OurClasses from '../pages/OurClasses'
import Trainers from '../pages/Trainers'
import Contact from '../pages/Contact'


const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "/benefits", element: <Benefits/> },
      { path: "/our-classes", element: <OurClasses/> },
      { path: "/trainers", element: <Trainers /> },
      { path: "/contact", element: <Contact/> },
    ],
  },
])

export default Router
