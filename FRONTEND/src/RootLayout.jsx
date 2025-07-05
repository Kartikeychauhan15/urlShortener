import React from 'react'
import HomePage from './pages/HomePage'
import { Outlet } from '@tanstack/react-router'
import Navbar from './components/Navbar'


function RootLayout() {
  return (
  <>
    <Navbar/>
    <Outlet/>
  </>
  )
}

export default RootLayout