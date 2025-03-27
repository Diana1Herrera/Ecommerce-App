import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: 1, username, password: hashedPassword };
  const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
  res.json({ user, token });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Aquí debería ir la consulta a la BD
  const validPassword = bcrypt.compareSync(password, "hashedPassword");
  if (!validPassword) return res.status(400).json({ error: "Credenciales incorrectas" });

  const token = jwt.sign({ id: 1 }, "secret", { expiresIn: "1h" });
  res.json({ token });
};
