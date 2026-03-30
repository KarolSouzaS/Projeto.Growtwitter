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
          <svg viewBox="0 0 24 24" aria-hidden="true" className="logo-icon">
            <g fill="#1d9bf0">
              <path d="M18.244 2H21l-6.5 7.428L22 22h-6.828l-5.34-6.992L3.5 22H1l6.96-7.96L2 2h6.828l4.78 6.292L18.244 2Zm-2.39 18h1.89L8.27 4H6.22l9.634 16Z"/>
            </g>
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
