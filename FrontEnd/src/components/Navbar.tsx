import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { token, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {token ? (
        <>
          <Link to="/products">Productos</Link>
          <Link to="/orders">Órdenes</Link>
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <Link to="/login">Iniciar sesión</Link>
      )}
    </nav>
  );
};

export default Navbar;
