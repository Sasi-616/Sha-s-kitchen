import React from 'react';
import './reststyle.css'; 

const App = () => {
  return (
    <div>
      <section className="navbar">
        <div className="container">
          <div className="logo">
            <a href="#" title="Logo">
              <img src="images/logo.png" alt="Restaurant Logo" className="img-responsive" />
            </a>
          </div>
          <div className="menu text-right">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#foods">Foods</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="food-search text-center">
        <div className="container">
          <form action="foods.html" method="POST">
            <input type="search" name="search" placeholder="Search for Food.." required />
            <input type="submit" name="submit" value="Search" className="btn btn-primary" />
          </form>
        </div>
      </section>
      <section id="categories" className="categories">
        <div className="container">
          <h2 className="text-center">Explore Foods</h2>
          <div className="box-3 float-container">
            <img src="images/pizza.jpg" alt="Pizza" className="img-responsive img-curve" />
            <h3 className="float-text text-white">Pizza</h3>
          </div>
          <div className="box-3 float-container">
            <img src="images/burger.jpg" alt="Burger" className="img-responsive img-curve" />
            <h3 className="float-text text-white">Burger</h3>
          </div>
          <div className="box-3 float-container">
            <img src="images/momo.jpg" alt="Momo" className="img-responsive img-curve" />
            <h3 className="float-text text-white">Momo</h3>
          </div>
        </div>
      </section>
      <section id="foods" className="food-menu">
        <div className="container">
          <h2 className="text-center">Food Menu</h2>
          <div className="food-menu-box">
            <div className="food-menu-img">
              <img src="images/menu-pizza.jpg" alt="Chicken Hawaiian Pizza" className="img-responsive img-curve" />
            </div>
            <div className="food-menu-desc">
              <h4>Chicken Hawaiian Pizza</h4>
              <p className="food-price">$2.3</p>
              <p className="food-detail">Made with Italian Sauce, Chicken, and organic vegetables.</p>
              <a href="#" className="btn btn-primary">Order Now</a>
            </div>
          </div>
          <div className="food-menu-box">
            <div className="food-menu-img">
              <img src="images/menu-burger.jpg" alt="Smoky Burger" className="img-responsive img-curve" />
            </div>
            <div className="food-menu-desc">
              <h4>Smoky Burger</h4>
              <p className="food-price">$2.3</p>
              <p className="food-detail">Made with Italian Sauce, Chicken, and organic vegetables.</p>
              <a href="#" className="btn btn-primary">Order Now</a>
            </div>
          </div>
        </div>
      </section>
      <section className="social">
        <div className="container text-center">
          <ul>
            <li><a href="https://instagram.com/"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram" /></a></li>
            <li><a href="https://twitter.com/"><img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" /></a></li>
          </ul>
        </div>
      </section>
      <section id="contact" className="footer">
        <div className="container text-center">
          <p>All rights reserved. Designed By <a href="#">SudeepAcharjee</a></p>
        </div>
      </section>
    </div>
  );
};

export default App;
