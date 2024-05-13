import React from "react";

const CategoriesSlider = () => {
  const categories = [
    { id: 1, image: "https://via.placeholder.com/150x100", title: "Category 1" },
    { id: 2, image: "https://via.placeholder.com/150x100", title: "Category 2" },
    { id: 3, image: "https://via.placeholder.com/150x100", title: "Category 3" }
  ];

  return (
    <div className="">
      <h2 className="text-left text-3xl font-bold ml-2">Categories</h2>
      <div className="flex justify-between gap-4  m-5 flex-wrap">
        {categories.map(category => (
          <div key={category.id} >
            <div className="relative" style={{ width: "250px", height: "100px" }}>
              <img src={category.image} alt={category.title} className="w-full h-full object-cover rounded-lg" />
              <p className="absolute bottom-0 left-0 w-full text-black ml-4 ">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSlider;
