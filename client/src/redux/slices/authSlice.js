import { createSlice } from '@reduxjs/toolkit'

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem("isAuth")

  if(isAuth && JSON.parse(isAuth) === true){
    return true
  }
  return false
}

const initialState = { 
    isAuth: userAuthFromLocalStorage
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state) => {
      state.isAuth = true
    },
    unAuthenticateUser: (state) => {
      state.isAuth = false
    }
  }
})

export const { authenticateUser, unAuthenticateUser} = authSlice.actions
export default authSlice.reducer