import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Perks } from './Perks'

export const PlacesPages = () => {

  const {action} = useParams()
  const [places, setPlaces] = useState([])
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
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    axios.get("/places").then(({data})=> {
      setPlaces(data)
    })
  }, [])

  async function addPicByLink(e) {
    e.preventDefault()
    const {data: filename} = await axios.post("/upload-by-link", {Link: lienPhoto})
    setAjoutPhotos(prev => {
      return [...prev, filename]
    })
    setLienPhoto("")
  }

  async function uploadPhoto(e){
    const files = e.target.files
    const data = new FormData()
    for(let i = 0; i < files.length; i++) {
      data.append("pics", files[i])
    }
    axios.post("/upload", data, {
      headers: {"Content-type": "multipart/form-data"}
    }).then(res=>{
      const {data:filename} = res
      setAjoutPhotos(prev => {
        return [...prev, filename]
      })
    })
  }

  async function AjoutPlace(e) {
    e.preventDefault()
    await axios.post ("/places", {titre, adresse, ajoutPhotos, 
    description, avantages, 
    infoExtra, heureEntrée, heureSortie, maxInvite
    })
    setRedirect(true)
  }

  if (redirect && action !== "new") {
    return <Navigate to={"/account/places"}/>
  }

  return (
    <div>
      {action !== "new" && (
        <Link to={"/account/places/new"}>Mes endroits</Link>
      )}  
      { action == "new" && (
        <div>
          <form onSubmit={AjoutPlace}>
            <h2 className='text-xl mt-2'>Titre</h2>
            <input type="text" placeholder='Titre' value={titre} onChange={(e)=> setTitre(e.target.value)}/>

            <h2 className='text-xl mt-2'>Adresse</h2>
            <input type="text" placeholder='Adresse' value={adresse} onChange={(e)=> setAdresse(e.target.value)}/>

            <h2 className='text-xl mt-2'>Photos</h2>

            <div className='flex gap-2'>
              <input type="text" placeholder="Veuillez envoyer des photos au format jpg"
                value={lienPhoto} onChange={(e)=> setLienPhoto(e.target.value)} />
              <button onClick={addPicByLink} className='bg-gray-300 px-4 rounded-2xl'>Ajouter photo</button>
            </div>
          
            <div>
              {ajoutPhotos.length > 0 && ajoutPhotos.map((link)=> {
                <div>
                 <img src={`${process.env.SERVER_PORT}/uploads/`+ link}/>
                </div>
              })}
              <label>
              <input type="file" multiple className='hidden' onChange={uploadPhoto} />
                upload
              </label>
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

          <div>
            {places.length > 0 && places.map(place => (
              <>
                <Link to={"/account/places/"+ place._id}/>
                  <div>
                    <div>
                      {place.pics.length > 0 && (
                        <img src={place.pics[0]} alt=""/>
                      )}
                    </div>

                    <div>
                    <h2>{place.title}</h2>
                    <p>{place.description}</p>
                    </div>
                    
                  </div>
              </>
              
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
