export default function Register() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-3xl font-bold">Registro</h1>
        <form className="mt-4 flex flex-col gap-4 w-80">
          <input type="text" placeholder="Nombre completo" className="border p-2 rounded" />
          <input type="email" placeholder="Correo electrónico" className="border p-2 rounded" />
          <input type="password" placeholder="Contraseña" className="border p-2 rounded" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Registrarse</button>
        </form>
      </main>
    );
  }
  