import React, { useState } from 'react'
import style from "../Header/Header.module.scss"
import { Link } from 'react-router-dom'
import { Input, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { openKatalog, openKorzinka, openSignin } from '../../slice';
import Korzinka from './Korzinka/Korzinka';
import Signin from './Signin/Signin';
import Katalog from './Katalog/Katalog';

const Header = () => {
  const { Search } = Input;

  const [ham, setHam] = useState(false)

  const selector = useSelector(state => state.data.korzina)
  const kotalogIstrue = useSelector(state => state.data.katalog)
  const dispatch = useDispatch()
  console.log(kotalogIstrue);
  function openMenu(word) {
    setHam(word)
    console.log(word);
  }
  return (
    <>

      <Korzinka isTrue={selector} />

      <Signin />
      {kotalogIstrue ?
        <div style={{ display: "flex" }}>
          <Katalog /> <button onClick={() => dispatch(openKatalog())} style={{width:"100%", background: "white", border: "none", position: "absolute", right: "0", top: "0", zIndex: "16",paddingLeft:"30px", paddingBottom:"20px", paddingRight: "40px", paddingTop: "20px", cursor:"pointer" ,display:"flex", alignItems:"end", justifyContent:"end"}}><img src="../assets/close_icon.svg" alt="" /></button>
        </div> : null}
      <div className={style.header}>

        <div onClick={() => openMenu(ham === 4 ? false : 4)} className={style.header__ham}>
          <img src="../assets/ham.svg" alt="" />
        </div>

        <div className={style.header__menu}>
          <ul>
            <li>
              <Link to="/aksiya">Акции</Link>
            </li>
            <li>
              <Link to="/Yetkazib_Berish">Оплата и доставка</Link>
            </li>
            <li>
              <Link to="/B_U">Скупка Б/У</Link>
            </li>
            <li>
              <Link to="/kontakt">Контакты</Link>
            </li>
          </ul>


          <ul className={ham === 4 ? style.header__ham_menu : style.header__menu2}>
            <li>
              <Link to="/aksiya">Акции</Link>
            </li>
            <li>
              <Link to="/yetkazib_berish">Оплата и доставка</Link>
            </li>
            <li>
              <Link to="/B_U">Скупка Б/У</Link>
            </li>
            <li>
              <Link to="/kontakt">Контакты</Link>
            </li>
          </ul>
        </div>


        <img className={style.header__mobile_logo} src="../assets/logo_top.svg" alt="" />
        <button onClick={() => dispatch(openSignin())} style={{ background: "none", border: "none", cursor: "pointer" }} >
          <img src="../assets/profile.svg" alt="" />
        </button>
      </div>

      <div className={style.header__bottom}>
        <Link className={style.header__bottom_logo} to={"/"}>
          <img src="../assets/logo.svg" alt="" />
        </Link>


        <button className={style.katalog_css1} >
          КАТАЛОГ ТОВАРОВ <img src="../assets/katalog.svg" alt="" />
        </button>

        <button className={style.katalog_css2} onClick={() => dispatch(openKatalog())} >
          КАТАЛОГ ТОВАРОВ <img src="../assets/katalog.svg" alt="" />
        </button>
        <div className={style.header__bottom__inner}>
          <Form className={style.header__botton_search}>
            <Search
              placeholder="input search text"
            />
          </Form>
          <img className={style.header__mobile_search_icon} src="../assets/search.svg" alt="" width={30} />

          <div className={style.header__bottom_icons}>
            <a style={{ color: "#060F42" }} href="tel:+998903308774">+998903308774</a>

            <button>
              <img src="" alt="" />
            </button>
            <button onClick={() => dispatch(openKorzinka())}>
              <span>1</span>
              <img src="../assets/korzina.svg" alt="" />
            </button>
            <button onClick={() => dispatch(openKorzinka())}>
              <span>1</span>
              <img src="../assets/korzina_mobile.svg" alt="" />
            </button>
          </div>
        </div>
      </div >
    </>
  )
}

export default Header