import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "../Signin/Signin.module.scss"
import { openSignin } from '../../../slice'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'

const Signin = () => {

  const selector = useSelector(state => state.data.signin)
  // console.log(props);
  const dispatch = useDispatch()

  console.log(selector);

  function Finish(e) {
    console.log(e);
  }

  return (
    <>
      <div className={selector ? style.bigBox : null}>
        <div style={selector ?
        {
          top: "0%", right: "50%",
          transform: "translate(50%, 50%)"
        } : { top: "-1000%" }} className={style.box}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2>
              Вход
            </h2>

            <img style={{ cursor: "pointer" }} onClick={() => dispatch(openSignin())} src="../assets/close_icon.svg" alt="" />
          </div>

          <Form style={{ marginTop: "20px" }} onFinish={(e) => Finish(e)}>
            <Form.Item name={"user"}>
              <Input placeholder='Ваш номер телефона' />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password placeholder='Пароль' />
            </Form.Item>

            <Link style={{ color: "blue" }} to="/">
              Забыли пароль?
            </Link>

            <Button htmlType='submit' type='primary' style={{ width: "100%", marginTop: "10px" }}>
              ВОЙТИ
            </Button>

            <br />
            <div style={{ position: "relative" }}>
              <hr style={{ marginTop: "20px" }} />
              <p className={style.text}>или войти с помощью</p>
            </div>

            <div className={style.sign}>
              <button>
                <img src="../assets/google.svg" alt="" width={24} /> <p>Google</p>
              </button>

              <button>
                <img src="../assets/facebook.svg" alt="" width={24} /> <p>Facebook</p>
              </button>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
              <p>Нет аккаунта? </p> <Link style={{ color: "blue" }} to={'/'}>Зарегистрироваться</Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Signin