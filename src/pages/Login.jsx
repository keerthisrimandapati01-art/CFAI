import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {

    if(username && password) {

      navigate("/")
    }
  }

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>🎓 UniAI Portal</h1>

        <input
          type="text"
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  )
}

export default Login