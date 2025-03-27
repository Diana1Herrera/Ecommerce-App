import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/auth/login", { email, password });
    login(res.data.token);
  };

  return (
   
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
    </form>
    
  );
};

export default Login;
