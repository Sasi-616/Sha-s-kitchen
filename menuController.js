const MenuItem = require('../models/MenuItem');

// Get all menu items
exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching menu items' });
  }
};

// Add a new menu item
exports.addMenuItem = async (req, res) => {
  try {
    const newMenuItem = new MenuItem(req.body);
    const savedItem = await newMenuItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'Error adding menu item' });
  }
};
