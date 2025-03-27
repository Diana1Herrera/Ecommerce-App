import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 5000;

// Conectar a la base de datos antes de levantar el servidor
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`));
}).catch((err) => {
  console.error("❌ Error al conectar a la base de datos:", err);
});
