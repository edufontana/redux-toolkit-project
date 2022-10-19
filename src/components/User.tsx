import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

export function User() {
  const state = useSelector(selectUser)

  console.log(state)

  return <div>{state.name}</div>
}
