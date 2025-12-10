
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'

import Home from '../pages/Home'
import Benefits from '../pages/Benefits'
import OurClasses from '../pages/OurClasses'
import Trainers from '../pages/Trainers'
import Contact from '../pages/Contact'
import BodyPartsPage from '../pages/exercises/BodyPartsPage'
import ExercisesListPage from '../pages/exercises/ExercisesListPage'
import ExerciseDetailPage from '../pages/exercises/ExerciseDetailPage'


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
      { path: 'exercises', element: <BodyPartsPage /> },
      { path: 'exercises/:bodyPart', element: <ExercisesListPage /> },
      { path: 'exercises/:bodyPart/:id', element: <ExerciseDetailPage/> },
    ],
  },
])

export default Router
