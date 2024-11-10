import React, { useState } from 'react';

function OrderForm() {
  const [formData, setFormData] = useState({
    quantity: 1,
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order confirmed for ${formData.name}`);
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <label>Quantity:</label>
      <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <label>Phone:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <label>Address:</label>
      <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
      <button type="submit">Confirm Order</button>
    </form>
  );
}

export default OrderForm;
