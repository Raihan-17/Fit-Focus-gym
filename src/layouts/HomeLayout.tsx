import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function HomeLayout(): 
JSX.Element {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-900 mt-15">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
