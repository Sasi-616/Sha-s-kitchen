export function formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }
  export function filterByCategory(menuItems, category) {
    return menuItems.filter(item => item.category === category);
  }
  