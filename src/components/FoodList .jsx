import React, { useState } from "react";

const foodList = [
  { id: 1, category: "Order", name: "Curry", image: "https://via.placeholder.com/150", date: "2024-05-13" },
  { id: 2, category: "Delivered", name: "Sushi", image: "https://via.placeholder.com/150", date: "2024-05-12" },
  { id: 3, category: "Finished", name: "Bibimbap", image: "https://via.placeholder.com/150", date: "2024-05-11" },
  { id: 4, category: "Order", name: "Naan", image: "https://via.placeholder.com/150", date: "2024-05-10" },
  { id: 5, category: "Delivered", name: "Ramen", image: "https://via.placeholder.com/150", date: "2024-05-09" },
  { id: 6, category: "Finished", name: "Kimchi", image: "https://via.placeholder.com/150", date: "2024-05-08" }
];

const FoodList = () => {
  const categories = ["Order", "Delivered", "Finished"];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  // Filtrar la lista de comidas por categoría seleccionada
  const filteredList = selectedCategory === "All" ? foodList : foodList.filter(food => food.category === selectedCategory);

  return (
    <div className="mt-2">
      <h2 className="text-xl font-bold mb-4">Food List</h2>
      <div className="flex mb-4">
        {categories.map(category => (
          <span
            key={category}
            className={`mr-4 cursor-pointer ${selectedCategory === category ? "font-bold underline" : ""}`}
            onClick={() => handleCategoryChange(category)}
            style={{ textDecoration: selectedCategory === category ? "underline" : "none" }}
          >
            {category}
          </span>
        ))}
      </div>
      <div>
        {filteredList.map(food => (
          <div key={food.id} className="bg-gray-100 p-4 rounded-md mb-4 flex items-center justify-between">
            <img src={food.image} alt={food.name} className="w-16 h-16 mr-4 rounded-lg" />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-1">{food.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{food.date}</p>
            </div>
            <div>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-full">Order Again</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
