import React, { useState } from 'react'
import {onRegistration} from "../api/authApi"
import Layout from '../components/layout'
import "../App.css"
import "./register.css"

function Register() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""    
  })
  
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const onChange =  (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    
    try {
     const {data} = await onRegistration(values)
     setError("")
     setSuccess(data.message)
     setValues({
      first_name: "",
      last_name: "",
      email: "",
      password: ""    
     })

    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      setError(error.response.data.errors[0].msg)
      setSuccess("")
    }
  }

  return (
    <Layout>
      <section className='body_reg_login flex_start'>     
        <div className='register__container'>   
          <form onSubmit={(e) => onSubmit(e)}>
            <h1 className='title__Style-reg'>Register Form</h1>
          
            <div className='reg__container-label flex_start'>
              <label htmlFor='first_name'  className='p__style_1'>
                First Name
              </label>
              <input
                onChange={(e) => onChange(e)}
                type="text"
                id="first_name"
                name="first_name"
                value={values.first_name}
                placeholder="First Name"
                required
                />
            </div>

            <div className='reg__container-label flex_start'>
              <label htmlFor='last_name' className='p__style_1'>
                Last Name
              </label>
              <input
                onChange={(e) => onChange(e)}
                type="text"
                id="last_name"
                name="last_name"
                value={values.last_name}
                placeholder="Last Name"
                required
                />
            </div>

            <div className='reg__container-label flex_start' >
              <label htmlFor='password' className='p__style_1'>
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

            <div className='reg__container-label flex_start' >
              <label htmlFor='email' className='p__style_1'>
                Email Address
              </label>
              <input  
                style={{marginRight:"3.5rem"}}           
                onChange={(e) => onChange(e)}
                type="email"
                id="email"
                name="email"
                value={values.email}
                placeholder="enter email address"
                required
                />
            </div>

            <div style={{color:"red", margin:"10px 0" }}>{error}</div>
            <div style={{color:"green", margin:"10px 0" }}>{success}</div>
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

export default Register