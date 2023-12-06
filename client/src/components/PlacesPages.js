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

            <div>
              <input type="text" placeholder={""}/>
            </div>

            <h2 className='text-xl mt-2'>Photos</h2>
            <button className='border bg-transparent rounded-2xl p-4'>Ajouter</button>
          </form>
        </div>
      )}
    </div>
  )
}
