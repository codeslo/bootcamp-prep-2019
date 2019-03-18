const shoppingCart = {
  apples: {
    cost_per_unit: 0.99,
    quantity: 12
  },
  milk_gal: {
    cost_per_unit: 3.99,
    quantity: 2
  },
  brocolli: {
    cost_per_unit: 1.25,
    quantity: 4
  }
};

// your code here
function getTotal() {
  let total = 0;
  for (let key in shoppingCart) {
    let item = shoppingCart[key];
    total += item.cost_per_unit * item.quantity;
  }

  return total;
}
