import "../styles/login.css"
import { useDispatch } from 'react-redux'
import { login } from '../store/slices/authSlice'

export default function Login() {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(login('karol'))
  }

  return (
    <div className="container">
      <div className="box">
        <h1>Login</h1>
        <button className="button" onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  )
}
