// src/components/ProductList.tsx
const products = [
    {
      id: 1,
      name: "Producto 1",
      price: "$20.00",
      image: "https://images.pexels.com/photos/8645407/pexels-photo-8645407.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Producto 2",
      price: "$35.00",
      image: "https://images.pexels.com/photos/31331181/pexels-photo-31331181/free-photo-of-cozy-cafe-latte-with-latte-art-by-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Producto 3",
      price: "$50.00",
      image: "https://images.pexels.com/photos/5151991/pexels-photo-5151991.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  
  export default function ProductList() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h2 className="mt-2 text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Añadir al carrito</button>
          </div>
        ))}
      </div>
    );
  }
  