import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Perks } from './Perks'

export const PlacesPages = () => {
  const {action} = useParams()
  const [titre,setTitre] = useState("")
  const [adresse, setAdresse] = useState("")
  const [ajoutPhotos, setAjoutPhotos] = useState([])
  const [lienPhoto, setLienPhoto] = useState("")
  const [description, setDescription] = useState("")
  const [avantages, setAvantages] = useState("")
  const [infoExtra, setInfoExtra] = useState("")
  const [heureEntrée, setHeureEntrée] = useState("")
  const [heureSortie, setHeureSortie] = useState("")
  const [maxInvite, setMaxInvite] = useState(1)

  return (
    <div>
      {action != "new" && (
        <Link to={"/account/places/new"}>Mes endroits</Link>
      )}  
      { action == "new" && (
        <div>
          <form>
            <h2 className='text-xl mt-2'>Titre</h2>
            <input type="text" placeholder='Titre' value={titre} onChange={(e)=> setTitre(e.target.value)}/>

            <h2 className='text-xl mt-2'>Adresse</h2>
            <input type="text" placeholder='Adresse' value={adresse} onChange={(e)=> setAdresse(e.target.value)}/>

            <h2 className='text-xl mt-2'>Photos</h2>
            <div className='flex gap-2'>
              <input type="text" placeholder="Veuillez envoyer des photos au format jpg" value={ajoutPhotos} onChange={(e)=> setAjoutPhotos(e.target.value)} />
              <button className='bg-gray-300 px-4 rounded-2xl'>Ajouter photo</button>
              <button className='border bg-transparent rounded-2xl p-4' value={lienPhoto} onChange={(e)=> setLienPhoto(e.target.value)}>Ajouter depuis votre appareil</button>
            </div>
            
            <h2 className='text-2xl mt-4'>Description</h2>
            <p className='text-gray-500 text-sm'>Description du lieu</p>
            <textarea value={description} onChange={(e)=> setDescription(e.target.value)} />
            <h2 className='text-2xl mt-4'>Atouts du lieu</h2>
            <p className='text-gray-500 text-sm'>Quels sont les atouts de ce lieu ?</p>

            <div className='grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
              <Perks selected={avantages} onChange={setAvantages}/>
            </div>

            <h2 className='text-2xl mt-4'>Infos additionnelles</h2>
            <p className='text-gray-500 text-sm'>Règles à respecter</p>
            <textarea value={infoExtra} onChange={(e)=> setInfoExtra(e.target.value)} />

            <h2 className='text-2xl mt-4'>Heures d'entrée/sortie, maximum d'invités</h2>
            <p className='text-gray-500 text-sm'>Entrer les heures, souvenez vous que les invités auront besoin de nettoyer</p>
            
            <div>
              <h3>Heure d'entrée</h3>
              <input type="text" placeholder='00:00' value={heureEntrée} onChange={(e)=> setHeureEntrée(e.target.value)}/>
            </div>
            <div>
              <h3>Heure de sortie</h3>
              <input type="text" placeholder='00:00' value={heureSortie} onChange={(e)=> setHeureSortie(e.target.value)}/>
            </div>
            <div>
              <h3>Nombre maximum d'invité</h3>
              <input type="text" placeholder='invités maximum' value={maxInvite} onChange={(e)=> setMaxInvite(e.target.value)}/>
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
