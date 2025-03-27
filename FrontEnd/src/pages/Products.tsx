import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map((p) => (
          <li key={p._id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
