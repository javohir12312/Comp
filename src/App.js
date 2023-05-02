import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Aksiya from './components/Aksiya/Aksiya'
import Kredit from './components/Kredit/Kredit'
import Tolov_Yetkazib_berish from './components/Tolov_Yetkazib_berish/Tolov_Yetkazib_berish'
import B_U from './components/B_U/B_U'
import Kontakt from './components/Kontakt/Kontakt'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/aksiya' element={<Aksiya />} />
        <Route path='/kredit' element={<Kredit />} />
        <Route path='/yetkazib_berish' element={<Tolov_Yetkazib_berish />} />
        <Route path='/B_U' element={<B_U />} />
        <Route path='/kontakt' element={<Kontakt />} />
      </Routes>
    </>
  )
}

export default App