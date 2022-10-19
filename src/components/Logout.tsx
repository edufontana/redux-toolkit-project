import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/userSlice'

export function Logout() {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return <Button onClick={handleLogout}>Logout</Button>
}
