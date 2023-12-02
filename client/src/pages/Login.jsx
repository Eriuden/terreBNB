import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mb-16'>
            <h1 className='text-4xl text-center'>Connexion</h1>
            <form className='max-w-md mx-auto border'>
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type="email" placeholder="Votre adresse mail"/>
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' type="password" placeholder="Votre mot de passe"/>
                <button className=' bg-gray-300 w-full text-white rounded-2xl'>Connexion</button>
                <div className='text-center py-2'>Vous n'êtes pas inscrit ? 
                    <Link className='underline' to={"/register"}>S'inscrire</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

