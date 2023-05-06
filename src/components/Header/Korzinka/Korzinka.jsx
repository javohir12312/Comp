import React, { useEffect } from 'react'
import styles from "./Korzinka.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { openKatalog, openKorzinka } from '../../../slice'

const Katalog = () => {
  const selector = useSelector(state => state.data.korzina)
  // console.log(props);
  const dispatch = useDispatch()

  console.log(selector);



  return (
    <>
      <div style={selector ? {height:'100%'} : null}>
        <div onClick={() => dispatch(openKorzinka())} className={selector ? styles.bigBox : null}>

        </div>
        <div id='box' style={selector ? { top: "50%", zIndex:23, transform:'translate(-50%,50%)' } : { top: "-100%" }} className={styles.box}>
          <div>
            <h2>
              Korzinka
            </h2>

            <img styles={{ cursor: "pointer" }} onClick={() => dispatch(openKorzinka())} src="../assets/close_icon.svg" alt="" />
          </div>

          <h4>
            Название комплекта
          </h4>

          <br />
          <hr />
        </div>
      </div>
    </>
  )
}

export default Katalog