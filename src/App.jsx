import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './scss/main.scss'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </>
  )
}

export default App
