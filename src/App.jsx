import React from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import SwitchEngery from './components/SwitchEngery'
import SwitchSilder from './components/SwitchSlider'
import Accordian from './components/Accordian'
import Footer from './components/Footer'
import JoinNews from './components/JoinNews'
import Utilies from './components/Utilies'
import Testimonls from './components/Testimonls'
import Faq from './components/Accordian2'
function App() {

  return (
    <>
      <Header />
      <Slider />
      <SwitchEngery />
      <SwitchSilder />
      <Accordian />
      <Utilies />
      <Testimonls />
      <Faq/>
      <JoinNews/>
      <Footer/>
    </>
  )
}

export default App
