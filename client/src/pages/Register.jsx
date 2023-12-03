import React from 'react'

export const Register = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

    async function register(e) {
        e.preventDefault();

        try {
            await axios.post("/register", {
                name,
                mail,
                password
            })
        }
        catch(err) {
            res.status(400).json(err)
        }  
    }
    
  return (
    <div>
         <div className='mb-16'>
            <h1 className='text-4xl text-center'>Inscription</h1>
            <form className='max-w-md mx-auto border'>
                <input className='w-full border my-1 py-2 px-3 rounded-2xl'
                    type="text" placeholder="Votre nom" value={name} onChange={(e)=> setName(e.target.value)}/>
                <input className='w-full border my-1 py-2 px-3 rounded-2xl ' 
                    type="email" placeholder="Votre adresse mail"value={mail} onChange={(e)=> setMail(e.target.value)}/>
                <input className='w-full border my-1 py-2 px-3 rounded-2xl' 
                    type="password" placeholder="Votre mot de passe" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button className=' bg-gray-300 w-full text-white rounded-2xl'>S'inscrire</button>
                <div className='text-center py-2'>Déjà inscrit ? 
                    <Link className='underline' to={"/login"}>Connexion</Link>
                </div>
            </form>
        </div>
    </div>
  )
}
