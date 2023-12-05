
import './App.css'
import { Header } from './components/Header'
import { Routes, Route } from "react-router-dom"
import { Login } from './pages/login'
import { Register } from './pages/Register'
import { UserContextProvider } from './contexts/userContext'
import { Account } from './pages/Account'


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
          <Route exact path={"/account"} element={<Account/>} />
        </Routes>
        <div>
          <Header/>
        </div>
      </UserContextProvider>
    </>
  )
}

export default App
