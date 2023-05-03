import React from 'react'
import Slider from './Slider/Slider'
import style from "./Home.module.scss"
import Katalog from "../Header/Katalog/Katalog"

const Home = () => {
  return (
    <>
      <div className={style.box} style={{ display: "flex", marginTop: "25px " }}>
        <div style={{ width: "400px", overflowY: "hidden" }}>
          <Katalog />
        </div>
        <div className={style.slide_box}>
          <div style={{margin:"0 auto",width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Slider />
          </div>
          <div>
            {/* <ul className={style.list}>
              <li>
                <img src={"../../../assets/free.svg"} alt="" />
                <h4>Бесплатная  сборка</h4>
              </li>
              <li>
                <img src="../../../assets/bolib.svg" alt="" />
                <h4>Рассрочка 4 мес./0%
                  без переплат</h4>
              </li>
              <li>
                <img src="../../../assets/dastavka.svg" alt="" />
                <h4>Бесплатная
                  доставка</h4>
              </li>
              <li>
                <img src="../../../assets/year.png" alt="" />
                <h4>Официальная
                  гарантия</h4>
              </li>
              <li>
                <img src="../../../assets/best_money.svg" alt="" />
                <h4>Лучшая цена
                </h4>
              </li>
              <li>
                <img src="../../../assets/year.png" alt="" />
                <h4>11 лет
                  на рынке</h4>
              </li>
              <li>
                <img src="../../../assets/consult.svg" alt="" />
                <h4>Профессиональная
                  консультация</h4>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home