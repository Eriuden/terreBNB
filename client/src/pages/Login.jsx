import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

export const Login = () => {

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const {setUser} =useContext(UserContext)

  async function login(e){
    e.preventDefault()
    try {
        const user = await axios.post("/login", {mail,password},
        setUser(user),
        {withCredentials: true})
        window.location ="/"}
    
    catch(err) {
    res.status(400).json(err)
    }
  }



  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mb-16'>
            <h1 className='text-4xl text-center'>Connexion</h1>
            <form className='max-w-md mx-auto border' onSubmit={login}>
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type="email" 
                  placeholder="Votre adresse mail" value={mail} onChange={(e)=> setMail(e.target.value)}/>
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type="password" 
                  placeholder="Votre mot de passe" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button className=' bg-gray-300 w-full text-white rounded-2xl'>Connexion</button>
                <div className='text-center py-2'>Vous n'êtes pas inscrit ? 
                    <Link className='underline' to={"/register"}>S'inscrire</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

