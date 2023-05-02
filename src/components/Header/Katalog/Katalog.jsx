import React from 'react'
import style from "./Katalog.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { openKatalog } from '../../../slice'

const Katalog = () => {
  const selector = useSelector(state => state.data.katalog)
  // console.log(props);
  const dispatch = useDispatch()

  console.log(selector);
  return (
    <>
      {selector ?
        <div className={style.bigBox}>
          <div className={style.box}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h2>
                КАТАЛОГ ТОВАРОВ
              </h2>

              <img style={{ cursor: "pointer" }} onClick={() => dispatch(openKatalog())} src="../assets/close_icon.svg" alt="" />
            </div>

            <h4>
              Название комплекта
            </h4>

            <br />
            <hr />
          </div>
        </div> :
        null}
    </>
  )
}

export default Katalog