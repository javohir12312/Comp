import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import B_U from './components/B_U/B_U'
import Kontakt from './components/Kontakt/Kontakt'
import Header from './components/Header/Header'
import Aksiya from './components/Aksiya/Aksiya'
import Tolov_Yetkazib_Berish from './components/Header/Tolov_Yetkazib_berish/Tolov_Yetkazib_berish'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/aksiya' element={<Aksiya/>} />
        <Route path='/Yetkazib_Berish' element={<Tolov_Yetkazib_Berish />} />
        <Route path='/B_U' element={<B_U />} />
        <Route path='/kontakt' element={<Kontakt />} />
      </Routes>
    </>
  )
}

export default App