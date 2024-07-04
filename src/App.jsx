import { useState } from 'react'
import './index.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import OurMentors from './Components/Our Mentors/OurMentors'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <OurMentors />
      <Footer/>
    </>
  )
}

export default App
