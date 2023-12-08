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
            <div className='grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
              <label>
                <input type="checkbox" className='flex rounded-2xl border p-4' />
                <span>Wifi</span>
              </label>
              <label>
                <input type="checkbox" className='flex rounded-2xl border p-4' />
                <span>Parking gratuit</span>
              </label>
              <label>
                <input type="checkbox" className='flex rounded-2xl border p-4' />
                <span>Télévision</span>
              </label>
              <label>
                <input type="checkbox" className='flex rounded-2xl border p-4' />
                <span>Radio</span>
              </label>
              <label>
                <input type="checkbox" className='flex rounded-2xl border p-4' />
                <span>Animaux acceptés</span>
              </label>
            </div>

            <h2 className='text-2xl mt-4'>Infos additionnelles</h2>
            <p className='text-gray-500 text-sm'>Règles à respecter</p>
            <textarea />

            <h2 className='text-2xl mt-4'>Heures d'entrée/sortie, maximum d'invités</h2>
            <p className='text-gray-500 text-sm'>Entrer les heures, souvenez vous que les invités auront besoin de nettoyer</p>
            <textarea />
            <div>
              <h3>Heure d'entrée</h3>
              <input type="text" placeholder='00:00'/>
            </div>
            <div>
              <h3>Heure de sortie</h3>
              <input type="text" placeholder='00:00'/>
            </div>
            <div>
              <h3>Nombre maximum d'invité</h3>
              <input type="text" placeholder='invités maximum'/>
            </div>

            <div>
              <button className='bg-gray-300 my-4'>Sauvegarder</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
