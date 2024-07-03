import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Footer/>
    </>
  )
}

export default App
