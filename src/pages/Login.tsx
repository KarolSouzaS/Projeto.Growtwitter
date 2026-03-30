import "../styles/login.css"
import { useDispatch } from "react-redux"
import { login } from "../store/slices/authSlice"
import { useState } from "react"
import type { AppDispatch } from "../store"

export default function Login() {
  const dispatch = useDispatch<AppDispatch>()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (!username || !password) return

    dispatch(login(username))
  }

  return (
    <div className="container">
      <div className="card">
        
        {/* Logo */}
       <div className="logo">
     <svg viewBox="0 0 24 24" className="logo-icon">
     <path
      fill="#1DA1F2"
      d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.13 12.13 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.7 4.23 4.23 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.29 4.29 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.87 0 12.17-6.52 12.17-12.17 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 22.46 6z"
        />
      </svg>
      </div>

        <h1 className="title">Entrar no Growtwitter</h1>

        {/* Form */}
        <form onSubmit={handleLogin}>
          
          <div className="input-group">
            <input
              type="text"
              required
              placeholder=" "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Nome de usuário</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Senha</label>
          </div>

          <button type="submit" className="button">
            Entrar
          </button>
        </form>

        <span className="link">
          Não tem uma conta? Cadastre-se
        </span>

      </div>
    </div>
  )
}
