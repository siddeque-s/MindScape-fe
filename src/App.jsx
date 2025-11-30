
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PublicHome from '../pages/PublicHome'
import Login from '../pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PublicHome/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
