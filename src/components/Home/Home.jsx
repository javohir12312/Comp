import React from 'react'
import Slider from './Slider/Slider'
import style from  "./Home.module.scss"
import Katalog from "../Header/Katalog/Katalog"

const Home = () => {
  return (
    <>
      <div className={style.box} style={{display:"flex",marginTop:"25px "} }>
        <div style={{width:"400px", overflowY:"hidden"}}>
          <Katalog/>
        </div>
        <Slider />
      </div>
    </>
  )
}

export default Home