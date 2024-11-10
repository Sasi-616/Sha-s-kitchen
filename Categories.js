import React from 'react';

function Categories() {
  const categories = ['Pizza', 'Burger', 'Momo'];

  return (
    <section className="categories">
      <div className="container">
        <h2 className="text-center">Explore Foods</h2>
        {categories.map((category, index) => (
          <div key={index} className="category-box">
            <img src={`images/${category.toLowerCase()}.jpg`} alt={category} />
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
