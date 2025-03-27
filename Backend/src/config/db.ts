import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any); // Evita problemas de tipado
    console.log("🔥 MongoDB conectado con éxito!");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error);
    process.exit(1); // Detener la app si falla la conexión
  }
};
