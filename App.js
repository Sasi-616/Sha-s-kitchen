import React from 'react';
import './assets/styles/reststyle.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Categories from './components/Categories';
import Menu from './components/Menu';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Categories />
      <Menu />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;
