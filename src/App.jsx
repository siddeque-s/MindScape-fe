
import { Route, Routes } from 'react-router-dom'
import './App.css'


import UserHome from './pages/UserHome'
import Login from './pages/Login'
import PublicHome from './pages/PublicHome'
import Journal from './pages/Jounal'
import Habits from './pages/Habits'
import MoodTracker from './pages/MoodTracker'
import Insights from './pages/Insights'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PublicHome/>} />
        <Route path='/login' element={<Login/>} />
        {/* userpages */}
        <Route path='/dashboard' element={<UserHome/>} />
        <Route path='/journal' element={<Journal/>} />
        <Route path='/habits' element={<Habits/>}/>
        <Route path='/moodTracker' element={<MoodTracker/>} />
        <Route path="/insights" element={<Insights/>}/>
      </Routes>
    </>
  )
}

export default App
