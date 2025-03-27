# Proyecto Full Stack con Node.js, Express, TypeScript y Next.js

Este proyecto consiste en un backend desarrollado con **Node.js, Express y TypeScript** y un frontend desarrollado con **Next.js y TypeScript**.

## 📌 Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalados:
- **Node.js** (versión 16 o superior)
- **npm** o **yarn**
- **MongoDB** (si el backend usa una base de datos)

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```sh
 git clone https://github.com/tu-usuario/tu-repositorio.git
 cd tu-repositorio
```

### 2️⃣ Configurar variables de entorno
Crea un archivo **`.env`** en la raíz del backend y agrega:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/tu_base_de_datos
JWT_SECRET=tu_secreto_jwt
```
Si el frontend necesita variables, crea **`.env.local`** en la carpeta `frontend/`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## ⚙️ Backend (Node.js, Express, TypeScript)

### 📥 Instalación de dependencias
```sh
 cd backend
 npm install  # o yarn install
```

### 🏃 Ejecutar el servidor
```sh
 npm run dev  # o yarn dev
```
El backend correrá en `http://localhost:5000`

---

## 🖥️ Frontend (Next.js, TypeScript)

### 📥 Instalación de dependencias
```sh
 cd frontend
 npm install  # o yarn install
```

### 🚀 Ejecutar el frontend
```sh
 npm run dev  # o yarn dev
```
El frontend correrá en `http://localhost:3000`

---

## 🛠️ Comandos útiles

### 🔹 Backend
- `npm run dev` → Ejecutar en modo desarrollo
- `npm run build` → Compilar el backend
- `npm start` → Iniciar la aplicación en producción

### 🔹 Frontend
- `npm run dev` → Ejecutar en modo desarrollo
- `npm run build` → Construir el frontend
- `npm start` → Servir la aplicación Next.js en producción

---

## 📄 Licencia
Este proyecto está bajo la licencia **MIT**. Puedes modificarlo y distribuirlo libremente.

---

¡Listo! Ahora puedes ejecutar el backend y frontend sin problemas. 🚀

