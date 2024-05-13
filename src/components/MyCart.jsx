import React from "react";

const MyCart = () => {
  // Array de productos de ejemplo
  const products = [
    { id: 1, name: "Hamburguesa", price: "$10", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Pizza", price: "$12", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Ensalada", price: "$8", image: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 ml-4">My Cart</h2>
      <h2 className="text-base mb-4 ml-4">Shopping is happy</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4 rounded-lg" />
            <div>
              <h3 className="text-md font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
