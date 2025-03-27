import { useState } from "react";
import { login } from "../services/api";

export default function Home() {
  const [form, setForm] = useState({ username: "", password: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await login(form);
    console.log("Token:", res.data.token);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
        <input name="username" placeholder="Usuario" className="p-2 border" onChange={handleChange} />
        <input name="password" type="password" placeholder="Contraseña" className="p-2 border mt-2" onChange={handleChange} />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded mt-2">Ingresar</button>
      </form>
    </div>
  );
}
