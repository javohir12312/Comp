import React from 'react'
import Slider from './Slider/Slider'
import style from "./Home.module.scss"
import Katalog from "../Header/Katalog/Katalog"

const Home = () => {
  return (
    <>
      <div className={style.box} style={{ display: "flex", marginTop: "25px ", alignItems: "center", justifyContent: "space-around" }}>
        <div style={{ width: "400px", overflowY: "hidden" }}>
          <Katalog />
        </div>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Slider />

          <ul className={style.list}>
            <li>
              <img src="../assets/free.svg" alt="" />
              <h2>Бесплатная
                сборка</h2>
            </li>
            <li>
              <img src="../assets/bolib.svg" alt="" />
              <h2>Рассрочка 4 мес./0%
                без переплат</h2>
            </li>
            <li>
              <img src="../assets/dastavka.svg" alt="" />
              <h2>Бесплатная
                доставка</h2>
            </li>
            <li>
              <img src="../assets/garant.svg" alt="" />
              <h2>Официальная
                гарантия</h2>
            </li>
            <li>
              <img src="../assets/best_money.svg" alt="" />
              <h2>Лучшая цена
              </h2>
            </li>
            <li>
              <img src="../assets/year.png" alt="" />
              <h2>11 лет
                на рынке</h2>
            </li>
            <li>
              <img src="../assets/consult.svg" alt="" />
              <h2>Профессиональная
                консультация</h2>
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Home