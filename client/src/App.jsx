
import './App.css'
import { Header } from './components/Header'
import { Routes, Route } from "react-router-dom"
import { Login } from './pages/login'
import { Register } from './pages/Register'


axios.defaults.baseURL = `${process.env.PORT}`
axios.defaults.withCredentials = true

function App() {
  
// Remplacer certaines valeurs par des icones plus tard
  return (
    <>
      <Routes>
        <Route exact path={"/"} element={<Home/>} />
        <Route exact path={"/login"} element={<Login/>} />
        <Route exact path={"/register"} element={<Register/>} />
      </Routes>
      <div>
        <Header/>
      </div>
    </>
  )
}

export default App
