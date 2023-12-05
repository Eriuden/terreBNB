import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'

export const Account = () => {
  const {user} = useContext(UserContext)

  if (!user) {
    return <Navigate to={"/login"}/>
  }
  return (
    <div>Profile</div>
  )
}
