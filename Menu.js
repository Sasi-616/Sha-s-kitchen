import React from 'react';
import menuItems from '../data/menuItems';
import { formatPrice, filterByCategory } from '../utils/helpers';
const formattedPrice = formatPrice(2.3);
function Menu() {
  return (
    <section className="food-menu">
      <h2 className="text-center">Food Menu</h2>
      <div className="container">
        {menuItems.map((item, index) => (
          <div key={index} className="food-menu-box">
            <div className="food-menu-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="food-menu-desc">
              <h4>{item.title}</h4>
              <p className="food-price">{item.price}</p>
              <p>{item.desc}</p>
              <a href="#" className="btn btn-primary">Order Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
