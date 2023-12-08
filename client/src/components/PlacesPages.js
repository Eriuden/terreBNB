import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const PlacesPages = () => {
  const {action} = useParams()
  return (
    <div>
      {action != "new" && (
        <Link to={"/account/places/new"}>Mes endroits</Link>
      )}  
      { action == "new" && (
        <div>
          <form>
            <h2 className='text-xl mt-2'>Titre</h2>
            <input type="text" placeholder='Titre'/>

            <h2 className='text-xl mt-2'>Adresse</h2>
            <input type="text" placeholder='Adresse'/>

            <h2 className='text-xl mt-2'>Photos</h2>
            <div className='flex gap-2'>
              <input type="text" placeholder={"Veuillez envoyer des photos au format jpg"}/>
              <button className='bg-gray-300 px-4 rounded-2xl'>Ajouter photo</button>
            </div>
            <button className='border bg-transparent rounded-2xl p-4'>Ajouter depuis votre appareil</button>
            <h2 className='text-2xl mt-4'>Description</h2>
            <p className='text-gray-500 text-sm'>Description du lieu</p>
            <textarea />
            <h2 className='text-2xl mt-4'>Atouts du lieu</h2>
            <p className='text-gray-500 text-sm'>Quels sont les atouts de ce lieu ?</p>
            <div>
              <label>
                <input type="checkbox" />
                <span>Wifi</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Parking gratuit</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Télévision</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Animaux acceptés</span>
              </label>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
