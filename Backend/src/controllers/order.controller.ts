import { Request, Response } from "express";
import { Order } from "../models/Order";
import { Product } from "../models/Product";

// Obtener todas las órdenes
export const getOrders = async (_: Request, res: Response) => {
  try {
    const orders = await Order.find().populate("product");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener órdenes" });
  }
};

// Crear una nueva orden
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { productId, quantity } = req.body;

    // Buscar el producto
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Calcular precio total
    const totalPrice = product.price * quantity;

    // Guardar la orden
    const order = new Order({ product: productId, quantity, totalPrice });
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la orden" });
  }
};
