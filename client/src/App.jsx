
import './App.css'
import { Header } from './components/Header'
import { Routes, Route } from "react-router-dom"
import { Login } from './pages/login'
import { Register } from './pages/Register'
import { UserContextProvider } from './contexts/userContext'
import { useEffect } from 'react'
import { Profile } from './pages/Profile'


axios.defaults.baseURL = `${process.env.PORT}`
axios.defaults.withCredentials = true

function App() {

  
// Remplacer certaines valeurs par des icones plus tard
  return (   
    <>
      <UserContextProvider>
        <Routes>
          <Route exact path={"/"} element={<Home/>} />
          <Route exact path={"/login"} element={<Login/>} />
          <Route exact path={"/register"} element={<Register/>} />
          <Route exact path={"/profile"} element={<Profile/>} />
        </Routes>
        <div>
          <Header/>
        </div>
      </UserContextProvider>
    </>
  )
}

export default App
