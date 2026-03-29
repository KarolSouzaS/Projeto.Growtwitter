import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from './store'

import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Explore from './pages/Explore'

export default function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)

  return (
    <Routes>
      {/* 🔐 Login */}
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" /> : <Login />}
      />

      {/* 🔒 Rotas protegidas */}
      <Route
        path="/"
        element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
      />

      <Route
        path="/profile/:username"
        element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
      />

      <Route
        path="/explore"
        element={isLoggedIn ? <Explore /> : <Navigate to="/login" />}
      />

      
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? '/' : '/login'} />}
      />
    </Routes>
  )
}