import { useState } from 'react'
import { User } from './components/User'
import { Login } from './components/Login'
import { Logout } from './components/Logout'

function App() {
  return (
    <>
      <User></User>
      <Login></Login>
      <Logout></Logout>
    </>
  )
}

export default App
