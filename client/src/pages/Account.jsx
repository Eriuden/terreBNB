import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'

export const Account = () => {
  const [redirect, setRedirect] = useState(false)
  const {user, setUser} = useContext(UserContext)
  let {subpage} = useParams()
  if (subpage =="undefined") {
    subpage="profile"
  }

  async function logout() {
    await axios.post("/logout") 
    setRedirect("/")
    setUser(null)
  }

  if (!user && !redirect) {
    return <Navigate to={"/login"}/>
  }

  

  function linkClasses(type=null) {
    let classes = "py-2 px-6"
    if (type === subpage) {
      classes += "bg-grey-300 text-white rounded-full"
    }
    return classes
  }

    if (redirect) {
      return <Navigate to={redirect} />
    }
  return (
    <div>
      <nav className='w-full flex justify-center mt-4 gap-4 mb-8'>
        <Link className={linkClasses("profile")} to={"/account"}>Mon profil</Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>Mes réservations</Link>
        <Link className={linkClasses("places")} to={"/account/places"}>Mes lieux</Link>
      </nav>
      {subpage === "profile" && (
        <div className='text-center max-w-lg mx-auto'>
          Connecté en tant que {user.name}
          <button onClick={logout()} className='bg-gray-300 max-w-sm mt-2'>Déconnexion</button>
        </div>
      )}
    </div>
  )
}
