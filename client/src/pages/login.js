import React, {useState} from 'react'
import Layout from '../components/layout'
import {onLogin} from "../api/authApi"
import {useDispatch} from "react-redux"
import {authenticateUser} from "../redux/slices/authSlice"
import "../App.css"
import"./login.css"


function Login() {
  const [values, setValues] = useState({
    email: "",
    password: ""    
  })
  
  const [error, setError] = useState(false)

  const onChange =  (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }

  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      await onLogin(values)
      //want to set isAuth to true
      //on success we will get a token, which is then to be set as the cookie
      dispatch(authenticateUser())

      localStorage.setItem("isAuth", "true")
     
    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      setError(error.response.data.errors[0].msg)
    }
  }

  return (
    <Layout>
      <section className='body_reg_login flex_start'>
        <div className='login__container'>
          <form onSubmit={(e) => onSubmit(e)}>
            <h1 className='title__Style-login'>Login  Form</h1>

            <div  className='login__container-label flex_start'>
              <label htmlFor='email'  className='p__style_1'>
                Email Address
              </label>
              <input
                onChange={(e) => onChange(e)}
                style={{marginRight:"3.5rem"}} 
                type="email"
                id="email"
                name="email"
                value={values.email}
                placeholder="enter email address"
                required
                />
            </div>

            <div  className='login__container-label flex_start'>
              <label htmlFor='password'  className='p__style_1'>
                Password
              </label>
              <input
                onChange={(e) => onChange(e)}
                type="password"
                id="password"
                name="password"
                value={values.password}
                placeholder="enter password"
                required
                />
            </div>
            <div style={{color:"red", margin:"10px 0" }}>{error}</div>
           
            <div className='flex_center'>
              <button type='submit' className='btn_style_1'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Login