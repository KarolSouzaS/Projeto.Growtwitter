import { useDispatch } from 'react-redux'
import { login } from '../store/slices/authSlice'

export default function Login() {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(login('karol'))
  }

  return (
    <div style={{ color: 'white', background: '#000', height: '100vh' }}>
      <h1>Login</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  )
}