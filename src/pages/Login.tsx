import "../styles/login.css"
import { useDispatch } from "react-redux"
import { login } from "../store/slices/authSlice"

export default function Login() {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(login("karol"))
  }

  return (
    <div className="container">
      <div className="card">
        <div className="logo">🐦</div>
        <h1 className="title">Entrar no Growtwitter</h1>

        <div className="input-group">
          <input type="text" required placeholder=" " />
          <label>Nome de usuário</label>
        </div>

        <div className="input-group">
          <input type="password" required placeholder=" " />
          <label>Senha</label>
        </div>

        <button className="button" onClick={handleLogin}>
          Entrar
        </button>

        <span className="link">Não tem uma conta? Cadastre-se</span>
      </div>
    </div>
  )
}
