import React from 'react'
import Header from './components/Header'
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

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
